import { List, MenuIcon, Shield, ShoppingCart } from 'lucide-react'
import React from 'react'

const data = [
  {
    title: 'Pilih Produk Favoritmu',
    description: 'Jelajahi berbagai kategori produk berkualitas yang telah kami kurasi khusus untuk Anda. Temukan kebutuhan dan keinginan Anda dengan mudah.',
    icon: <List className='size-7 text-white' />,
  },
  {
    title: 'Tambahkan ke Keranjang',
    description: 'Klik sekali untuk menambahkan produk pilihan ke keranjang belanja. Nikmati pengalaman belanja tanpa ribet!',
    icon: <ShoppingCart className='size-7 text-white' />,
  },
  {
    title: "Checkout dan Tunggu Pesanan",
    description: 'Proses pembayaran aman dan cepat. Pesanan Anda akan kami kirimkan dengan pengiriman yang handal dan terpercaya.',
    icon: <Shield className='size-7 text-white' />,
  }
]

const SectionThreeStep = () => {
  return (
    <div className='w-full bg-[#1F1346]'>
      <div className='mx-auto w-10/12 max-w-5xl py-20'>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <h2 className='text-3xl font-bold text-white tracking-wide'>Belanja mudah dalam 3 langkah!</h2>
          <p className='text-white font-extralight'>Kami percaya bahwa pengalaman belanja online haruslah sederhana dan menyenangkan. Dengan hanya tiga langkah mudah, Anda bisa menemukan produk favorit, menambahkannya ke keranjang, dan menyelesaikan pembayaran dengan cepat.</p>
          <div className='flex flex-col md:flex-row gap-5 text-white'>
            {data.map((item, index) => (
              <div key={index} className='bg-rafaishop-secondary rounded-lg p-7 flex flex-col gap-2'>
                <div className='bg-[#673DE6] p-2 rounded-lg size-10 flex items-center justify-center'>
                  {item.icon}
                </div>
                <h4 className='text-left text-lg font-semibold'>{item.title}</h4>
                <p className='text-justify'>
                  {item.description}
                </p>
              </div>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThreeStep