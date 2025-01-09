"use client"

import React from 'react'
import { toast } from "sonner"

const ContactUsSection = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleSend = () => {
    toast(`
        Pesan Sukses Terkirim! \n
        Nama: ${name} \n
        Email: ${email} \n
        Pesan: ${message}
      `)
  }


  return (
    <div className='mx-auto w-10/12 max-w-5xl py-20'>
      {/* <form > */}
        <h2 className='text-3xl font-bold text-center mb-10 text-rafaishop-secondary'>Hubungi Kami</h2>
        <div className='flex flex-col gap-4 mt-4'>
          <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Nama' className='border-2 border-gray-300 rounded-lg p-2' />
          <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' className='border-2 border-gray-300 rounded-lg p-2' />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Pesan' className='border-2 border-gray-300 rounded-lg p-2' />
          <button type='button' onClick={handleSend} className='rounded-lg bg-rafaishop-primary text-white font-semibold hover:bg-rafaishop-primary/90 tracking-wide w-full md:w-auto px-14 py-3 mt-4'>Kirim</button>
        </div>
      {/* </form> */}
    </div>
  )
}

export default ContactUsSection