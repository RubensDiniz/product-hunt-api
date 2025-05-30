import styled from '@emotion/styled'
import { PaginationObserver } from '@/components/PaginationObserver'

// TODO! Fix height/overflow?
export const ListWrapper = styled.div`
  max-height: 660px;
  overflow-y: auto;

  background-color: #f3f5f7;
`

export const ItemsWrapper = styled(PaginationObserver)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.7rem;
  gap: 0.7rem;
`
