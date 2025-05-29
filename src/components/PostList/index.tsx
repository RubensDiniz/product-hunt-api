import { PostListProps } from './types'
import { ItemsWrapper, ListWrapper } from './styles'
import { PostItem, SkeletonPost } from '@/components/PostItem'

export const PostList = ({
  posts,
  onEndOfList,
  isInitialLoading,
  isLoadingMore,
}: PostListProps) => {
  if (isInitialLoading)
    return (
      <ListWrapper>
        <ItemsWrapper onEndOfList={() => undefined}>
          {Array.from({ length: 13 }, (_, index) => (
            <SkeletonPost key={index} index={index} />
          ))}
        </ItemsWrapper>
      </ListWrapper>
    )

  return (
    <ListWrapper>
      <ItemsWrapper onEndOfList={onEndOfList} offset={100}>
        {posts?.map(({ node }) => (
          <PostItem
            key={node.id}
            name={node.name}
            tagline={node.tagline}
            votesCount={node.votesCount}
            thumbnail={node.thumbnail.url}
          />
        ))}
        {isLoadingMore && <div>LOADING...</div>}
      </ItemsWrapper>
    </ListWrapper>
  )
}
