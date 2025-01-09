import Link from 'next/link'
import React from 'react'

type NavlinksProps = {
  routes: {
    name: string
    url: string
  }[]
}

const Navlinks = ({routes}: NavlinksProps) => {

  return (
    <div className='flex gap-5 items-center justify-between'>
      {routes.map((link, index) => (
        <Link href={link.url} key={index} className=' hover:text-rafaishop-primary transition-all relative group'>
          <p className='mr-4'>{link.name}</p>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-rafaishop-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  )
}

export default Navlinks