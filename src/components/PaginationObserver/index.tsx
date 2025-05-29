import { useEffect, useRef } from 'react'
import { PaginationObserverProps } from './types'
import { RelativeParent, Observer } from './styles'

export const PaginationObserver = ({
  onEndOfList,
  offset = 30,
  disabled = false,
  className,
  children,
}: PaginationObserverProps) => {
  const intersectingRef = useRef(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementRef.current || !observerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (disabled) return

        // TODO! Remove console logs...
        if (entry.isIntersecting && !intersectingRef.current) {
          console.log('entered')
          intersectingRef.current = true
          onEndOfList()
        } else if (!entry.isIntersecting && intersectingRef.current) {
          console.log('left')
          intersectingRef.current = false
        }
      },
      {
        root: null,
        threshold: 0.01,
      }
    )

    observer.observe(observerRef.current)

    return () => observer.disconnect()
  }, [onEndOfList, disabled, offset])

  return (
    <RelativeParent>
      <div ref={elementRef} className={className}>
        {children}
      </div>
      <Observer ref={observerRef} offset={offset} />
    </RelativeParent>
  )
}
