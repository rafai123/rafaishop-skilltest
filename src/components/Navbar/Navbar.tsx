"use client"
import React, { useState } from 'react'
import Navlinks from './Navlinks'
import { usePathname, useRouter } from 'next/navigation'
import { useMedia } from 'react-use'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

const routes = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Products',
    url: '/products'
  },
  {
    name: 'About Us',
    url: '/about-us'
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathName = usePathname()
  const isMobile = useMedia("(max-width: 640px)", false)

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className='flex w-full'>
            <nav className='flex items-center justify-between w-full p-4'>
              <Button
                variant={"rafaishopprimary"}
                size={"sm"}
                className="mr-auto font-normal bg-rafaishop-primary hover:bg-rafaishop-primary/50 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
              >
                <Menu className="size-7 font-bold transition-all hover:text-rafaishop-primary" />
              </Button>
              <div>
                <ShoppingCart className="size-5" />
              </div>
            </nav>
          </SheetTrigger>
          <SheetContent side="left" className="px-2">
          {/* <SheetHeader> */}
            <SheetTitle>
              <div className='logo'>
                <Link href='/' className='relative group'>
                  <h1 className='text-xl font-bold hover:text-rafaishop-primary transition-all'>Rafaishop</h1>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-rafaishop-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </SheetTitle>
            <nav className="flex flex-col items-start gap-y-2 pt-6">
            
              {routes.map((route) => (
                <Button key={route.url} className='group relative' variant={pathName === route.url ? "secondary" : "ghost"} onClick={() => onClick(route.url)}>
                  {route.name}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-rafaishop-primary transition-all duration-300 group-hover:w-full"></span>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <nav className='w-full flex items-center justify-between p-4 mx-auto max-w-5xl'>
      <div className='logo'>
        <Link href='/' className='relative group'>
          <h1 className='text-xl font-bold hover:text-rafaishop-primary transition-all'>Rafaishop</h1>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-rafaishop-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
      <div className='navlinks'>
        <Navlinks routes={routes} />
      </div>
      <div className='cart'>
        <div onClick={() => toast("Tidak sempat buat fitur cart pak :(")} className='hover:text-rafaishop-primary transition-all'>
          <ShoppingCart className="size-5" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar