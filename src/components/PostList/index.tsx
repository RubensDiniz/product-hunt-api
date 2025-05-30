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
          {Array.from({ length: 12 }, (_, index) => (
            <SkeletonPost key={index} index={index} />
          ))}
        </ItemsWrapper>
      </ListWrapper>
    )

  return (
    <ListWrapper>
      <ItemsWrapper onEndOfList={onEndOfList} offset={80} disabled={isLoadingMore}>
        {posts?.map(({ node }) => (
          <PostItem
            key={node.slug}
            slug={node.slug}
            name={node.name}
            tagline={node.tagline}
            votesCount={node.votesCount}
            thumbnail={node.thumbnail.url}
          />
        ))}
        {isLoadingMore &&
          Array.from({ length: 12 }, (_, index) => <SkeletonPost key={index} index={index} />)}
      </ItemsWrapper>
    </ListWrapper>
  )
}
