'use client'
import { useParams, useRouter } from 'next/navigation'
import { ProductPageParams } from '@/app/product/[slug]/types'
import {
  BackButton,
  ButtonsWrapper,
  GetItLink,
  Hero,
  PageWrapper,
  ProductDescription,
  ProductHead,
  ProductInfo,
  VoteButton,
} from '@/app/product/[slug]/styles'
import { GET_POST_BY_SLUG } from '@/graphql'
import { useQuery } from '@apollo/client'
import { GetPostBySlugData, GetPostBySlugVariables } from '@/graphql/types'
import { useState } from 'react'

const Product = () => {
  const router = useRouter()
  const params = useParams<ProductPageParams>()

  const [hasVoted, setHasVoted] = useState<boolean>(false)

  // TODO! Use loading?
  const { data, loading } = useQuery<GetPostBySlugData, GetPostBySlugVariables>(GET_POST_BY_SLUG, {
    variables: { slug: params['slug'] },
  })

  return (
    <PageWrapper>
      <div>
        <BackButton onClick={() => router.back()}>⮜</BackButton>
      </div>
      <Hero src={data?.post.media[0]?.url} alt="Hero" />
      <ProductInfo>
        <ProductHead>
          <img src={data?.post.thumbnail.url} alt="Thumbnail" />
          <span>{data?.post.name}</span>
        </ProductHead>
        <ProductDescription>{data?.post.description}</ProductDescription>
      </ProductInfo>
      <ButtonsWrapper>
        <GetItLink href={data?.post.url ?? '/'}>Get it</GetItLink>
        <VoteButton hasVoted={hasVoted} onClick={() => setHasVoted((prev) => !prev)}>
          Upvote ({hasVoted ? (data?.post.votesCount ?? 500) + 1 : data?.post.votesCount})
        </VoteButton>
      </ButtonsWrapper>
    </PageWrapper>
  )
}

export default Product
