import { Post } from '@/graphql'

export type PostListProps = {
  posts: { node: Post }[]
  loading?: boolean
  onEndOfList: () => void
}
