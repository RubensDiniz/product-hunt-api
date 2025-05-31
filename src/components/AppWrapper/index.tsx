'use client'
import { ReactNode } from 'react'
import client from '@/graphql/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyles } from '@/components/GlobalStyles'
import { ChildrenContainer, ScreenWrapper } from './styles'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

export const emotionCache = createCache({
  key: 'css',
  prepend: true,
})

export const AppWrapper = ({ children }: { children: ReactNode }) => (
  <CacheProvider value={emotionCache}>
    <ApolloProvider client={client}>
      <ScreenWrapper>
        <ChildrenContainer>
          <GlobalStyles />
          {children}
        </ChildrenContainer>
      </ScreenWrapper>
    </ApolloProvider>
  </CacheProvider>
)
