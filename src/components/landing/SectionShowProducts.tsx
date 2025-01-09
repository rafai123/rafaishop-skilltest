"use client"

import React from 'react'
import ProductsSection from '../ProductsSection'

const SectionShowProducts = () => {

  return (
    <div className='mx-auto w-10/12 max-w-5xl py-20'>
      <h2 className='text-rafaishop-secondary text-3xl font-bold text-center '>Pilih barang impian anda sekarang dengan beberapa klik!</h2>
      <p className='text-center'>Pilih barang impian anda tanpa resiko, masukkan keranjang dengan 1x klik!</p>
      <div className='w-full flex flex-wrap gap-2 justify-center h-full mt-10'>
        <ProductsSection total={6} swiper={true} />
      </div>
    </div>
  )
}

export default SectionShowProducts