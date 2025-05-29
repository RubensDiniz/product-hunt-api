import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts($order: PostsOrder!) {
    posts(order: $order, first: 10) {
      edges {
        node {
          id
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
      }
    }
  }
`

/*
const { data, loading, error } = useQuery(GET_POSTS, {
  variables: { order: 'VOTES' } // or 'NEWEST', 'FEATURED'
});
 */
