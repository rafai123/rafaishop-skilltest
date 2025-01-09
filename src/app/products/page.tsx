import ProductsSection from '@/components/ProductsSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsPage = () => {
  return (
    <main>
      <Link href={"#search-products"}>
        <Image src='/banner-product.svg' width={1920} height={1080} alt='Banner' className='mx-auto w-10/12 max-w-5xl my-5' />
      </Link>
      <section id='search-products' className='mx-auto w-10/12 max-w-5xl flex gap-2 my-5'>
        <input type="text" className='w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rafaishop-primary focus:outline-none border-rafaishop-primary' placeholder='Cari barang impian mu yuk' />
        <button className='rounded-lg bg-rafaishop-primary hover-rafaishop-secondary transition-all text-white font-semibold tracking-wider py-2 px-8 flex items-center justify-center'>Cari</button>
      </section>
      <section id='products' className='mx-auto w-10/12 max-w-5xl flex gap-3 my-5 flex-wrap'>
        <ProductsSection total={30} />
      </section>
    </main>
  )
}

export default ProductsPage