'use client'
import { PostListProps } from './types'
import { ItemsWrapper, ListWrapper } from './styles'
import { PostItem } from '@/components/PostItem'

export const PostList = ({ posts, loading, onEndOfList }: PostListProps) => {
  // TODO! Skeletons

  return (
    <ListWrapper>
      <ItemsWrapper onEndOfList={onEndOfList} offset={60}>
        {posts?.map(({ node }) => (
          <PostItem
            key={node.id}
            name={node.name}
            tagline={node.tagline}
            votesCount={node.votesCount}
            thumbnail={node.thumbnail.url}
          />
        ))}
      </ItemsWrapper>
    </ListWrapper>
  )
}
