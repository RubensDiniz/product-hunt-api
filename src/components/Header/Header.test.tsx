import { render, screen } from '@testing-library/react'
import { Header } from './index'
import '@testing-library/jest-dom'
import type { Mock } from 'jest-mock'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

import { usePathname } from 'next/navigation'

describe('Header', () => {
  beforeEach(() => {
    ;(usePathname as Mock).mockReset()
  })

  it('renders both navigation items', () => {
    ;(usePathname as Mock).mockReturnValue('/products/popular')

    render(<Header />)

    expect(screen.getByText('Popular')).toBeInTheDocument()
    expect(screen.getByText('Newest')).toBeInTheDocument()
  })

  it('adds "active" class to the current path', () => {
    ;(usePathname as Mock).mockReturnValue('/products/newest')

    render(<Header />)

    expect(screen.getByText('Popular')).not.toHaveClass('active')
    expect(screen.getByText('Newest')).toHaveClass('active')
  })
})
