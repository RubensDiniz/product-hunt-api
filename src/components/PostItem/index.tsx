import { useState } from 'react'
import { InfoWrapper, PostItemWrapper, Thumbnail, VoteButton } from '@/components/PostItem/styles'

// TODO! Props
// TODO! Ellipsis (no wrap!)
export const PostItem = ({}) => {
  // TODO! Hasvoted action?
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  return (
    <PostItemWrapper>
      <Thumbnail
        src={'https://ph-files.imgix.net/4bb79a58-baab-4434-af76-985ca67ed467.png?auto=format'}
      />
      <InfoWrapper>
        <span>Uizard</span>
        <p>Transform your blah blah</p>
      </InfoWrapper>
      <VoteButton hasVoted={hasVoted} onClick={() => setHasVoted((prev) => !prev)}>
        <span>⮝</span>
        <span>123</span>
      </VoteButton>
    </PostItemWrapper>
  )
}
