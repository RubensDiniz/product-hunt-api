import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.producthunt.com/v2/api/graphql',
    fetch,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
})

export default client
