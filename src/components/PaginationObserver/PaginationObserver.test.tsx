import React from 'react'
import { render, act } from '@testing-library/react'
import { PaginationObserver } from './index'

// IntersectionObserver mock setup
// It is being defined once for all tests because it's a browser API
beforeAll(() => {
  const observe = jest.fn()
  const disconnect = jest.fn()

  // We use "any" type here because we're simply mocking behavior, not replicating the full API
  global.IntersectionObserver = jest.fn(function (this: any, callback) {
    this.observe = observe
    this.disconnect = disconnect
    this.trigger = (isIntersecting: boolean) => {
      callback([{ isIntersecting }], this)
    }
  }) as any
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('PaginationObserver', () => {
  it('calls onEndOfList when intersecting and not disabled', () => {
    const onEndOfList = jest.fn()

    render(
      <PaginationObserver onEndOfList={onEndOfList}>
        <div>Content</div>
      </PaginationObserver>
    )

    const instance = (IntersectionObserver as jest.Mock).mock.instances[0]
    act(() => instance.trigger(true))

    expect(onEndOfList).toHaveBeenCalled()
  })

  it('does not call onEndOfList when disabled', () => {
    const onEndOfList = jest.fn()

    render(
      <PaginationObserver onEndOfList={onEndOfList} disabled>
        <div>Content</div>
      </PaginationObserver>
    )

    const instance = (IntersectionObserver as jest.Mock).mock.instances[0]
    act(() => instance.trigger(true))

    expect(onEndOfList).not.toHaveBeenCalled()
  })

  it('does not call onEndOfList twice for continuous intersection', () => {
    const onEndOfList = jest.fn()

    render(
      <PaginationObserver onEndOfList={onEndOfList}>
        <div>Content</div>
      </PaginationObserver>
    )

    const instance = (IntersectionObserver as jest.Mock).mock.instances[0]

    // Simulates two intersection events where it is intersecting both times (i.e. element is visible)
    act(() => {
      instance.trigger(true)
      instance.trigger(true)
    })

    expect(onEndOfList).toHaveBeenCalledTimes(1)

    // Simulates the observer not intersecting, then intersecting again
    act(() => {
      instance.trigger(false)
      instance.trigger(true)
    })

    expect(onEndOfList).toHaveBeenCalledTimes(2)
  })
})
