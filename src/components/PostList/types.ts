import { ListPost } from '@/graphql'

export type PostListProps = {
  posts: { node: ListPost }[]
  onEndOfList: () => void
  isInitialLoading?: boolean
  isLoadingMore?: boolean
}
