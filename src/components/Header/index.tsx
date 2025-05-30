'use client'
import { HeaderItem, HeaderWrapper } from '@/components/Header/styles'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()

  const headerItems = [
    {
      label: 'Popular',
      path: '/products/popular',
    },
    {
      label: 'Newest',
      path: '/products/newest',
    },
  ]

  return (
    <HeaderWrapper>
      {headerItems.map((item) => (
        <HeaderItem
          key={item.path}
          href={item.path}
          className={item.path === pathname ? 'active' : ''}
        >
          {item.label}
        </HeaderItem>
      ))}
    </HeaderWrapper>
  )
}
