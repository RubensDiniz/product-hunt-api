import { gql } from '@apollo/client'

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(slug: $slug) {
      id
      name
      tagline
      description
      votesCount
      commentsCount
      createdAt
      url
      thumbnail {
        url
      }
      user {
        name
        username
        profileImage
      }
      topics {
        edges {
          node {
            id
            name
          }
        }
      }
      media {
        url
        type
      }
    }
  }
`
