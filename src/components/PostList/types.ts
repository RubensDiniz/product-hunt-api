import { Post } from '@/graphql'

export type PostListProps = {
  posts: { node: Post }[]
  onEndOfList: () => void
  isInitialLoading?: boolean
  isLoadingMore?: boolean
}
