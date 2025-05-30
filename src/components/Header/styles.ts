import styled from '@emotion/styled'
import Link from 'next/link'

export const HeaderWrapper = styled.div`
  display: flex;
  background-color: white;

  a.active {
    color: #d95734;
    font-weight: bold;
    border-bottom-color: #d95734;
  }
`

export const HeaderItem = styled(Link)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  color: #70797b;
  border-bottom: solid 2px transparent;
`
