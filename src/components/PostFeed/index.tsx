import { PostFeedProps } from '@/components/PostFeed/types'
import { useEffect, useState } from 'react'
import { GET_POSTS, GetPostsData, ListPost } from '@/graphql'
import { useQuery } from '@apollo/client'
import { PostList } from '@/components/PostList'

export const PostFeed = ({ order }: PostFeedProps) => {
  const [cursor, setCursor] = useState<string | null>(null)
  const [allPosts, setAllPosts] = useState<{ node: ListPost }[]>([])
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false)

  const {
    data,
    loading: isInitialLoading,
    fetchMore,
  } = useQuery<GetPostsData>(GET_POSTS, {
    variables: { order, after: null },
    fetchPolicy: 'cache-first',
  })

  useEffect(() => {
    if (data?.posts?.edges && allPosts.length === 0) {
      setAllPosts(data.posts.edges)
      setCursor(data.posts.pageInfo.endCursor ?? null)
    }
  }, [data?.posts?.edges, data?.posts?.pageInfo.endCursor, allPosts.length])

  const loadNextPage = () => {
    if (!data?.posts?.pageInfo?.hasNextPage || !cursor) return

    setIsFetchingMore(true)
    fetchMore({
      variables: { order, after: cursor },
    })
      .then((res) => {
        const newEdges = res.data.posts.edges
        const newCursor = res.data.posts.pageInfo.endCursor
        setAllPosts((prev) => [...prev, ...newEdges])
        setCursor(newCursor ?? null)
      })
      .finally(() => setIsFetchingMore(false))
  }

  return (
    <PostList
      posts={allPosts}
      isInitialLoading={isInitialLoading}
      onEndOfList={loadNextPage}
      isLoadingMore={isFetchingMore}
    />
  )
}
