import { Star } from 'lucide-react'
import React from 'react'

const testimonials = [
  {
    name: 'Muhammad Rafai',
    review: 'Saya sangat puas dengan pelayanan dari Rafaishop. Produk yang saya beli sampai dengan selamat dan sesuai dengan deskripsi. Terima kasih!'
  },
  {
    name: "Yotsuba",
    review: "Saya sangat puas dengan pelayanan dari Rafaishop. Produk yang saya beli sampai dengan selamat dan sesuai dengan deskripsi. Terima kasih!"
  },
  {
    name: "Yatogami Tohka",
    review: "Saya sangat puas dengan pelayanan dari Rafaishop. Produk yang saya beli sampai dengan selamat dan sesuai dengan deskripsi. Terima kasih!"
  }
]

const SectionTestimoni = () => {
  return (
    <div className='mx-auto w-10/12 max-w-5xl py-20'>
      <h2 className='text-rafaishop-secondary text-3xl font-bold text-center '>Dipercayai banyak pelanggan di seluruh Indonesia!</h2>
      <div className='flex flex-col md:flex-row items-center gap-5  mt-10'>
        {testimonials.map((item, index) => (
          <div key={index} className='rounded-lg shadow-lg'>
          <div className='p-5 flex flex-col gap-4 bg-[#F3F4FE]'>
            <h4 className='font-semibold text-rafaishop-secondary md:text-lg'>{item.name}</h4>
          </div>
          <div className='flex flex-col p-5 gap-2'>
            <div className='flex items-center gap-1'>
              <Star className='size-6 text-rafaishop-primary' />
              <Star className='size-6 text-rafaishop-primary' />
              <Star className='size-6 text-rafaishop-primary' />
              <Star className='size-6 text-rafaishop-primary' />
              <Star className='size-6 text-rafaishop-primary' />
            </div>
            <p className='text-justify'>{item.review}</p>
          </div>
        </div>
        ))}  
      </div>
    </div>
  )
}

export default SectionTestimoni