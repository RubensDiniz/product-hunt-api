import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 710px;
  width: 100%;
  padding: 1rem;
  gap: 1rem;

  border-radius: 1rem;

  background-color: #eaeced;
`

export const BackButton = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 50%;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  background-color: white;
  line-height: normal;
`

export const Hero = styled.img`
  border-radius: 1.5rem;
  aspect-ratio: 1.542;
  width: 100%;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  border-radius: 1.5rem;

  overflow-y: auto;

  background-color: white;
`

export const ProductHead = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  > img {
    height: 4.286rem;
    aspect-ratio: 1;
    border-radius: 0.8rem;
  }

  > span {
    font-size: 1.571rem;
    font-weight: bold;
  }
`

export const ProductDescription = styled.span`
  font-size: 1.2rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 1.5rem;
  padding: 1rem;

  border-radius: 1.5rem;

  background-color: white;
`

const baseButtonStyles = css`
  flex: 1;
  padding: 1rem 0;

  color: black;

  border-radius: 4px;
  border: solid 1px lightgray;

  background-color: white;

  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`

export const GetItLink = styled(Link)`
  ${baseButtonStyles}
`

interface VoteButtonProps {
  hasVoted: boolean
}

export const VoteButton = styled.button<VoteButtonProps>`
  ${baseButtonStyles}

  ${({ hasVoted }) =>
    hasVoted &&
    css`
      color: white;
      border-color: #d9552d;
      background-color: #d9552d;
    `}
`
