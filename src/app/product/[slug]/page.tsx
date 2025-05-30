'use client'
import { useParams, useRouter } from 'next/navigation'
import { ProductPageParams } from '@/app/product/[slug]/types'
import {
  BackButton,
  Hero,
  PageWrapper,
  ProductDescription,
  ProductHead,
  ProductInfo,
  ProductName,
} from '@/app/product/[slug]/styles'
import { GET_POST_BY_SLUG } from '@/graphql'
import { useQuery } from '@apollo/client'
import { GetPostBySlugData, GetPostBySlugVariables } from '@/graphql/types'

const Product = () => {
  const params = useParams<ProductPageParams>()

  const router = useRouter()

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
          <ProductName>
            <span>{data?.post.name}</span>
            <p>{data?.post.topics.edges[0]?.node.name}</p>
          </ProductName>
        </ProductHead>
        <ProductDescription>{data?.post.description}</ProductDescription>
      </ProductInfo>
    </PageWrapper>
  )
}

export default Product
