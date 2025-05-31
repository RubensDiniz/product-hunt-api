import { render, screen, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { PostFeed } from './index'
import { GET_POSTS } from '@/graphql'
import React from 'react'

// Mocks
const mockPost = (slug: string) => ({
  node: {
    slug,
    name: `Post ${slug}`,
    tagline: `Tagline ${slug}`,
    votesCount: 100,
    thumbnail: { url: `/thumb-${slug}.png` },
  },
})

const initialMock = {
  request: {
    query: GET_POSTS,
    variables: { order: 'POPULAR', after: null },
  },
  result: {
    data: {
      posts: {
        edges: [mockPost('1'), mockPost('2')],
        pageInfo: {
          endCursor: 'cursor-2',
          hasNextPage: true,
        },
      },
    },
  },
}

const fetchMoreMock = {
  request: {
    query: GET_POSTS,
    variables: { order: 'POPULAR', after: 'cursor-2' },
  },
  result: {
    data: {
      posts: {
        edges: [mockPost('3')],
        pageInfo: {
          endCursor: null,
          hasNextPage: false,
        },
      },
    },
  },
}

describe('PostFeed', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    const observe = jest.fn()
    const disconnect = jest.fn()

    // We use "any" type here because we're simply mocking behavior, not replicating the full API
    const mockIntersectionObserver = jest.fn(function (this: any, callback) {
      this.observe = observe
      this.disconnect = disconnect
      this.trigger = (isIntersecting: boolean) => {
        callback([{ isIntersecting }], this)
      }
    })

    Object.defineProperty(global, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: mockIntersectionObserver,
    })
  })

  it('renders initial loading state', async () => {
    render(
      <MockedProvider mocks={[initialMock]} addTypename={false}>
        <PostFeed order="VOTES" />
      </MockedProvider>
    )

    expect(await screen.findAllByTestId('skeleton-post')).toHaveLength(12)
  })

  it('renders posts after loading', async () => {
    render(
      <MockedProvider mocks={[initialMock]} addTypename={false}>
        <PostFeed order="VOTES" />
      </MockedProvider>
    )

    expect(await screen.findByText('Post 1')).toBeInTheDocument()
    expect(await screen.findByText('Post 2')).toBeInTheDocument()
  })

  it('calls fetchMore when onEndOfList triggers and hasNextPage is true', async () => {
    render(
      <MockedProvider mocks={[initialMock, fetchMoreMock]} addTypename={false}>
        <PostFeed order="VOTES" />
      </MockedProvider>
    )

    const ioInstance = (IntersectionObserver as any).mock.instances[0]

    // Wait for initial posts
    await screen.findByText('Post 1')

    // Simulate intersection
    ioInstance.trigger(true)

    // Wait for fetchMore post
    await screen.findByText('Post 3')
  })

  it('does not call fetchMore if hasNextPage is false or cursor is null', async () => {
    const mockNoNextPage = {
      request: {
        query: GET_POSTS,
        variables: { order: 'POPULAR', after: null },
      },
      result: {
        data: {
          posts: {
            edges: [mockPost('1')],
            pageInfo: {
              endCursor: null,
              hasNextPage: false,
            },
          },
        },
      },
    }

    render(
      <MockedProvider mocks={[mockNoNextPage]} addTypename={false}>
        <PostFeed order="VOTES" />
      </MockedProvider>
    )

    const ioInstance = (IntersectionObserver as any).mock.instances[0]

    await screen.findByText('Post 1')
    ioInstance.trigger(true)

    // No error = no fetchMore triggered (there’s no Post 2 or Post 3)
    await waitFor(() => {
      expect(screen.queryByText('Post 2')).not.toBeInTheDocument()
      expect(screen.queryByText('Post 3')).not.toBeInTheDocument()
    })
  })
})
