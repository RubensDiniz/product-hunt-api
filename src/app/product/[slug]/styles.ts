import styled from '@emotion/styled'

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
`

export const ProductName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > span {
    font-size: 1.571rem;
    font-weight: bold;
  }

  > p {
    margin: 0;
  }
`

export const ProductDescription = styled.span`
  font-size: 1.2rem;
`
