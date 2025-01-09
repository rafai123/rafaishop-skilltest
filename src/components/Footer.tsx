import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Coming Soon!", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  return (
    <footer className='bg-rafaishop-secondary w-full'>
      <div className='mx-auto w-10/12 max-w-5xl py-10'>

      <div className="flex gap-5 flex-col md:flex-row items-center justify-between mx-auto py-5">
        <Link href={"/"}>
          <h1 className='text-2xl text-white font-semibold border-b-2 border-white hover:text-white/90'>RafaiShop</h1>
        </Link>
        <div className="flex gap-7">
            <FaInstagram className="text-2xl md:text-3xl text-white cursor-pointer" />
            <FaLinkedin className="text-2xl md:text-3xl text-white cursor-pointer" />
            <FaYoutube className="text-2xl md:text-3xl text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-end flex-wrap gap-5 mt-2 md:mt-0 mx-auto">
        {footerLinks.map((item, index) => (
          <>
            <Link key={index} href={item.link} className="text-base text-white">
              {item.name}
            </Link>
            {index !== footerLinks.length - 1 && <div className="md:border-t border-t-slate-400 md:w-5"></div>}
          </>
        ))}
      </div>

      <div className="flex items-center justify-center md:justify-end mt-5">
        <p className="text-sm font-thin text-slate-300">© 2025 Rafaishop. All rights reserved.</p>
      </div>

      </div>
    </footer>
  )
}

export default Footer