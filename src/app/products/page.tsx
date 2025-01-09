"use client"

import ProductsSection from '@/components/ProductsSection'
import { ProductsResponse, useGetProducts } from '@/hooks/api/useGetProducts'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ProductsPage = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductsResponse[]>([]);
  const { data: products } = useGetProducts(); 

  useEffect(() => {
    if (products) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  };

  return (
    <main>
      <Link href={"#search-products"}>
        <Image src='/banner-product.svg' width={1920} height={1080} alt='Banner' className='mx-auto w-10/12 max-w-5xl my-5' />
      </Link>
      <section id='search-products' className='mx-auto w-10/12 max-w-5xl flex gap-2 my-5'>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rafaishop-primary focus:outline-none border-rafaishop-primary"
          placeholder="Cari barang impian mu yuk"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button
          className='rounded-lg bg-rafaishop-primary hover-rafaishop-secondary transition-all text-white font-semibold tracking-wider py-2 px-8 flex items-center justify-center'
        >
          Cari
        </button>
      </section>
      <section id='products' className='mx-auto w-10/12 max-w-5xl flex gap-3 my-5 flex-wrap'>
      <ProductsSection products={filteredProducts} />
      </section>
    </main>
  )
}

export default ProductsPage