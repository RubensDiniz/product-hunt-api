import { useState } from 'react'
import {
  InfoWrapper,
  SkeletonPostWrapper,
  PostItemLink,
  Thumbnail,
  VoteButton,
  SkeletonVoteButton,
  PostItemContainer,
} from './styles'
import { PostItemProps, SkeletonPostProps } from '@/components/PostItem/types'

export const PostItem = ({ slug, name, tagline, votesCount, thumbnail }: PostItemProps) => {
  // TODO! Hasvoted action?
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  return (
    <PostItemContainer>
      <PostItemLink href={`/product/${slug}`}>
        <Thumbnail src={thumbnail} alt="Thumbnail" />
        <InfoWrapper>
          <span>{name}</span>
          <p>{tagline}</p>
        </InfoWrapper>
      </PostItemLink>

      <VoteButton hasVoted={hasVoted} onClick={() => setHasVoted((prev) => !prev)}>
        <span>⮝</span>
        <span>{hasVoted ? votesCount + 1 : votesCount}</span>
      </VoteButton>
    </PostItemContainer>
  )
}

export const SkeletonPost = ({ index }: SkeletonPostProps) => (
  <SkeletonPostWrapper index={index} data-testid="skeleton-post">
    <SkeletonVoteButton />
  </SkeletonPostWrapper>
)
