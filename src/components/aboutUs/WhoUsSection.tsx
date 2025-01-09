import React from 'react'
import TwoColumnsLayout from './TwoColumnsLayout'

const WhoUsSection = () => {
  return (
    <div className='bg-rafaishop-secondary'>
      <TwoColumnsLayout 
        left={
          <>
            <div>
              <h1 className='text-2xl text-white font-semibold'>Siapa kami?</h1>
            </div>
          </>
        }
        
        right={
          <>
            <p className='text-white text-justify'>Rafaishop adalah platform belanja online terpercaya yang hadir untuk mempermudah kebutuhan Anda. Kami menyediakan berbagai produk berkualitas dengan harga bersahabat, dikurasi khusus untuk memberikan pengalaman belanja terbaik. Dengan layanan yang cepat dan ramah, kami berkomitmen untuk menjadi pilihan utama Anda dalam memenuhi kebutuhan sehari-hari</p>
          </>
        }
      />
      <TwoColumnsLayout
        reverse={true}
        right={
          <>
            <div>
              <h1 className='text-2xl text-white text-right font-semibold'>Misi kami untuk anda</h1>
            </div>
          </>
        }
        
        left={
          <>
            <p className='text-white text-justify'>Di Rafiashop, kami percaya bahwa belanja online haruslah mudah, aman, dan menyenangkan. Misi kami adalah:
            <ul className='list-disc'>
              <li>Menyediakan produk berkualitas terbaik.</li>
              <li>Memberikan layanan pelanggan yang ramah dan responsif.</li>
              <li>Menghadirkan pengalaman belanja yang praktis dan tanpa ribet.</li>
            </ul>
              Dengan komitmen ini, kami terus berinovasi untuk memberikan yang terbaik bagi Anda.</p>
          </>
        }
      />
    </div>
  )
}

export default WhoUsSection