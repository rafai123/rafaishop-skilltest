import Link from 'next/link'
import React from 'react'

const SectionToProductPage = () => {
  return (
    <div className='w-full bg-rafaishop-secondary'>
      <div className='mx-auto w-10/12 max-w-5xl py-20'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h2 className='text-3xl font-bold text-white tracking-wide text-center'>Yuk, rasakan sendiri pengalaman belanja yang mudah dan nyaman di Rafaishop!</h2>
          <p className='text-white'>Cukup klik tombol di bawah ini untuk ke halaman produk loh!</p>
          <Link href={"/products"} className='rounded-lg bg-[#FC5185] px-14 py-3 mt-4'>
            <p className='text-sm font-bold tracker-wide text-white'>Lihat produk</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionToProductPage