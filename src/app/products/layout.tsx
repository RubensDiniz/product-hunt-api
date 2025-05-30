'use client'
import { ReactNode } from 'react'
import { ProductsLayoutWrapper } from '@/app/products/styles'
import { Header } from '@/components/Header'

const ProductsLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => (
  <ProductsLayoutWrapper>
    <Header />
    {children}
  </ProductsLayoutWrapper>
)

export default ProductsLayout
