'use client'
import { ReactNode } from 'react'
import client from '@/graphql/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyles } from '@/components/GlobalStyles'

export const AppWrapper = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    {children}
  </ApolloProvider>
)