'use client'
import { useState } from 'react'
import { InfoWrapper, PostItemWrapper, Thumbnail, VoteButton } from '@/components/PostItem/styles'
import { PostItemProps } from '@/components/PostItem/types'

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
