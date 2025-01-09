import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center gap-5 md:py-16 md:flex-row mx-auto w-10/12 max-w-5xl'>
      <div className='flex flex-col justify-center py-7 '>
        <h1 className='text-3xl md:text-4xl text-rafaishop-primary font-bold'>RafaiShop:</h1>
        <h2 className='text-3xl md:text-4xl text-rafaishop-secondary font-bold'>Solusi cepat <br /> cari barang online </h2>
        <div className='w-full md:max-w-md flex flex-col gap-3 mt-1'>
          <p className='text-justify lg:text-lg'>Temukan produk pilihan berkualitas dengan harga terbaik. Nikmati kemudahan belanja online dari mana saja, kapan saja.</p>
          <p className='font-bold text-rafaishop-secondary lg:text-lg'>Gass Baca lebih lanjut!</p>
        </div>
        <div className='flex gap-3 py-2'>
          <Link href={"/"} className='bg-rafaishop-secondary rounded-lg text-pretty hover:bg-rafaishop-secondary/80 hover:shadow text-white py-3 px-5'>
            <p className='tracking-wider text-sm font-semibold'>Lihat lebih lanjut</p>
          </Link>
          <Link href={"/"} className='bg-rafaishop-primary/30 rounded-lg text-pretty hover:bg-rafaishop-primary/70 hover:shadow text-rafaishop-secondary hover:text-white py-3 px-5'>
            <p className='tracking-wider text-sm font-semibold'>Lihat lebih lanjut</p>
          </Link>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <Image src={"./hero-yotsuba.svg"} width={500} height={500} alt='Rafaishop' />
      </div>
    </div>
  )
}

export default HeroSection