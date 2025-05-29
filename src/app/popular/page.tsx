'use client'
import { useQuery } from '@apollo/client'
import { GET_POSTS, GetPostsData, Post } from '@/graphql'
import { PostList } from '@/components/PostList'
import { useEffect, useRef, useState } from 'react'

const Popular = () => {
  const [cursor, setCursor] = useState<string | null>(null)
  const [allPosts, setAllPosts] = useState<{ node: Post }[]>([])
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false)

  const {
    data,
    loading: isInitialLoading,
    error,
    fetchMore,
  } = useQuery<GetPostsData>(GET_POSTS, {
    variables: { order: 'VOTES', after: null }, // or 'NEWEST', 'FEATURED'
  })

  useEffect(() => {
    if (data?.posts?.edges && allPosts.length === 0) {
      setAllPosts(data.posts.edges)
      setCursor(data.posts.pageInfo.endCursor ?? null)
    }
  }, [data, allPosts.length])

  const loadNextPage = () => {
    if (!data?.posts?.pageInfo?.hasNextPage || !cursor) return

    setIsFetchingMore(true)
    fetchMore({
      variables: {
        order: 'VOTES',
        after: cursor,
      },
    })
      .then((res) => {
        const newEdges = res.data.posts.edges
        const newCursor = res.data.posts.pageInfo.endCursor

        setAllPosts((prev) => [...prev, ...newEdges])
        setCursor(newCursor ?? null)
      })
      .finally(() => {
        setIsFetchingMore(false)
      })
  }

  if (isInitialLoading) return <p>Loading...</p>

  return <PostList posts={allPosts} loading={isInitialLoading} onEndOfList={loadNextPage} />
}

export default Popular
