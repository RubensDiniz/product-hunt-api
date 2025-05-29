import styled from '@emotion/styled'

export const PostItemWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem 2.2rem 1rem 0.7rem;
    
    width: calc(100% - 0.8rem);
    
    border-radius: 0.7rem;
    background-color: white;
    
    cursor: pointer;
`

export const Thumbnail = styled.img`
    height: 2.857rem;
    aspect-ratio: 1;
    border-radius: 0.3rem;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    
    > span {
        color: black;
    }

    > p {
        margin: 0;
        color: gray;
        font-size: 12px;
    }
`

interface VoteButtonProps {
  hasVoted: boolean
}

export const VoteButton = styled.div<VoteButtonProps>`
    position: absolute;
    top: calc(50% - 1.5rem);
    right: -0.8rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    color: ${({ hasVoted }) => hasVoted ? 'white' : 'black'};
    
    border: solid 1px ${({ hasVoted }) => hasVoted ? 'orange' : 'lightgray'};
    border-radius: 0.5rem;
    
    background-color: ${({ hasVoted }) => hasVoted ? 'orange' : 'white'};
    
    cursor: pointer;
    user-select: none;
`
