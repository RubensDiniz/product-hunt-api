import { render, screen, fireEvent } from '@testing-library/react'
import { PostItem } from './index'
import '@testing-library/jest-dom'

const mockProps = {
  slug: 'mock-product',
  name: 'Mock Product',
  tagline: 'This is a mock product',
  votesCount: 100,
  thumbnail: '/mock-thumbnail.jpg',
}

describe('PostItem', () => {
  it('renders name, tagline, and vote count', () => {
    render(<PostItem {...mockProps} />)

    expect(screen.getByText(mockProps.name)).toBeInTheDocument()
    expect(screen.getByText(mockProps.tagline)).toBeInTheDocument()
    expect(screen.getByText(String(mockProps.votesCount))).toBeInTheDocument()
  })

  it('has a link to the specific product page', () => {
    render(<PostItem {...mockProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', `/product/${mockProps.slug}`)
  })

  it('increments vote count on click and toggles back', () => {
    render(<PostItem {...mockProps} />)

    const voteButton = screen.getByRole('button')

    // First click
    fireEvent.click(voteButton)
    expect(screen.getByText(String(mockProps.votesCount + 1))).toBeInTheDocument()

    // Second click
    fireEvent.click(voteButton)
    expect(screen.getByText(String(mockProps.votesCount))).toBeInTheDocument()
  })

  it('applies the "voted" styles to the VoteButton when clicked', () => {
    render(<PostItem {...mockProps} />)

    const voteButton = screen.getByRole('button')

    fireEvent.click(voteButton)
    expect(voteButton).toHaveStyle({
      backgroundColor: 'd9572e',
      color: 'rgb(255, 255, 255)',
    })
  })
})
