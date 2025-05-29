import styled from '@emotion/styled'
import { PaginationObserver } from '@/components/PaginationObserver'

// TODO! Fix overflow?
export const ListWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  max-height: 660px;

  background-color: #f3f5f7;
`

export const ItemsWrapper = styled(PaginationObserver)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.7rem;
  gap: 0.7rem;
`

export const LoadingIndicator = styled.div``
