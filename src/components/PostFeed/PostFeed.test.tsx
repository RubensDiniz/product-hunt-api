import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { PostFeed } from './index'
import { GET_POSTS } from '@/graphql'
import React from 'react'

// Mocks
const mockPost = (slug: string) => ({
  cursor: `cursor-${slug}`,
  node: {
    slug,
    name: `Post ${slug}`,
    tagline: `Tagline ${slug}`,
    votesCount: 100,
    url: `https://example.com/post-${slug}`,
    thumbnail: { url: `/thumb-${slug}.png` },
    user: { name: `User ${slug}` },
  },
})

const initialMock = {
  request: {
    query: GET_POSTS,
    variables: { order: 'VOTES', after: null },
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
})
