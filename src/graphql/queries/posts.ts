import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts($order: PostsOrder!, $after: String) {
    posts(order: $order, first: 15, after: $after) {
      edges {
        node {
          slug
          name
          tagline
          votesCount
          thumbnail {
            url
          }
          user {
            name
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`
