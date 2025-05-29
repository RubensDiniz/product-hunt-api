import { useState } from 'react'
import {
  InfoWrapper,
  SkeletonPostWrapper,
  PostItemWrapper,
  Thumbnail,
  VoteButton,
  SkeletonVoteButton,
} from './styles'
import { PostItemProps, SkeletonPostProps } from '@/components/PostItem/types'

export const PostItem = ({ name, tagline, votesCount, thumbnail }: PostItemProps) => {
  // TODO! Hasvoted action?
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  return (
    <PostItemWrapper>
      <Thumbnail src={thumbnail} />
      <InfoWrapper>
        <span>{name}</span>
        <p>{tagline}</p>
      </InfoWrapper>
      <VoteButton hasVoted={hasVoted} onClick={() => setHasVoted((prev) => !prev)}>
        <span>⮝</span>
        <span>{hasVoted ? votesCount + 1 : votesCount}</span>
      </VoteButton>
    </PostItemWrapper>
  )
}

export const SkeletonPost = ({ index }: SkeletonPostProps) => (
  <SkeletonPostWrapper index={index}>
    <SkeletonVoteButton />
  </SkeletonPostWrapper>
)
