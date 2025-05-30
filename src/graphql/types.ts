export type DetailedPost = {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  votesCount: number
  commentsCount: number
  createdAt: string
  url: string
  thumbnail: {
    url: string
  }
  user: {
    name: string
    username: string
    profileImage: string
  }
  topics: {
    edges: {
      node: {
        id: string
        name: string
      }
    }[]
  }
  media: {
    url: string
    type: string
  }[]
}

export type GetPostBySlugData = {
  post: DetailedPost
}

export type GetPostBySlugVariables = {
  slug: string
}

export type ListPost = {
  slug: string
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
  node: ListPost
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
