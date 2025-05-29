export type Post = {
  id: string
  name: string
  tagline: string
  votesCount: number
  url: string
  thumbnail: {
    url: string
  }
  user: {
    name: string
  }
}

export type PostEdge = {
  node: Post
  cursor: string
}

export type GetPostsData = {
  posts: {
    edges: PostEdge[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string | null
    }
  }
}
