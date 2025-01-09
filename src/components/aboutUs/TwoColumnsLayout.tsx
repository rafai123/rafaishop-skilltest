import React, {  ReactNode } from 'react'

const TwoColumnsLayout = ({right, left, reverse}: {right: ReactNode, left: ReactNode, reverse?: boolean}) => {

  if (reverse) {
    return (
      <div className='mx-auto w-10/12 max-w-5xl py-10'>
        <div className='flex items-center justify-end'>
          {right}
        </div>
        <div className='flex flex-col justify-center py-10 '>
          {left}
        </div>
      </div>
    )
  }

  return (
    <div className='mx-auto w-10/12 max-w-5xl py-10'>
      <div className='flex flex-col justify-center py-10 '>
        {/* <h1 className='text-3xl md:text-4xl text-rafaishop-primary font-bold'>RafaiShop:</h1>
        <h2 className='text-3xl md:text-4xl text-rafaishop-secondary font-bold'>Solusi cepat <br /> cari barang online </h2>
        <div className='w-full md:max-w-md flex flex-col gap-3 mt-1'>
          <p className='text-justify lg:text-lg'>Temukan produk pilihan berkualitas dengan harga terbaik. Nikmati kemudahan belanja online dari mana saja, kapan saja.</p>
          <p className='font-bold text-rafaishop-secondary lg:text-lg'>Gass Baca lebih lanjut!</p>
        </div> */}
        {left}
      </div>

      <div className='flex items-center justify-center'>
        {/* <Image src={"./hero-yotsuba.svg"} width={500} height={500} alt='Rafaishop' /> */}
        {right}
      </div>
    </div>
  )
}

export default TwoColumnsLayout