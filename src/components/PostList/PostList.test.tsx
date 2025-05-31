import { render } from '@testing-library/react'
import { PostList } from './index'
import React from 'react'

describe('PostList', () => {
  // IntersectionObserver mock setup (it is inside ItemsWrapper, which is a styled PaginationObserver)
  // It is being defined before each test because it is per-component
  beforeEach(() => {
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

  it('calls onEndOfList when observer enters the viewport', () => {
    const onEndOfList = jest.fn()

    render(
      <PostList
        posts={[]}
        onEndOfList={onEndOfList}
        isInitialLoading={false}
        isLoadingMore={false}
      />
    )

    // Simulates intersection
    const observerInstance = (IntersectionObserver as any).mock.instances[0]
    observerInstance.trigger(true)

    expect(onEndOfList).toHaveBeenCalled()
  })

  it('does NOT call onEndOfList when isLoadingMore (i.e. when PaginationObserver is disabled)', () => {
    const onEndOfList = jest.fn()

    render(
      <PostList
        posts={[]}
        onEndOfList={onEndOfList}
        isInitialLoading={false}
        isLoadingMore={true}
      />
    )

    const observerInstance = (IntersectionObserver as any).mock.instances[0]
    observerInstance.trigger(true)

    expect(onEndOfList).not.toHaveBeenCalled()
  })
})
