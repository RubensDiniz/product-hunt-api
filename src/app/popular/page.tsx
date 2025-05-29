'use client'
import { PostItem } from '@/components/PostItem'
import { useQuery } from '@apollo/client'
import { GET_POSTS, GetPostsData } from '@/graphql'

const Popular = () => {
  const { data, loading, error } = useQuery<GetPostsData>(GET_POSTS, {
    variables: { order: 'VOTES' }, // or 'NEWEST', 'FEATURED'
  })

  if (loading) return <p>Loading...</p>

  return (
    <>
      {/*<ul>*/}
      {/*  {data?.posts.edges.map(({ node }) => (*/}
      {/*    <li key={node.id}>*/}
      {/*      <img src={node.thumbnail.url} alt="" width={40} />*/}
      {/*      <a href={node.url} target="_blank">{node.name}</a>*/}
      {/*      <p>{node.tagline}</p>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      <PostItem />
    </>
  )
}

export default Popular
