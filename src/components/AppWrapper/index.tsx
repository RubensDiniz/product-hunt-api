'use client'
import { ReactNode } from 'react'
import client from '@/graphql/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyles } from '@/components/GlobalStyles'
import { ChildrenContainer, ScreenWrapper } from './styles'

// TODO! Unit testing...
export const AppWrapper = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <ScreenWrapper>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ScreenWrapper>
  </ApolloProvider>
)
