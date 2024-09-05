import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Menu from '@/components/Menu';
import SearchBar from '@/components/SearchBar';
import Navicons from '@/components/Navicons';

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 relative'>
       <div className='flex items-center justify-between h-full md:hidden'>
       {/* MOBILE */}
       <Link href="/" className='text-xl tracking-wide'> PxShopify</Link>
       <Menu />
       </div>
                {/* LARGER SCREENS */}
          <div className='hidden md:flex items-center justify-between gap-8 h-full' >
                  {/* LEFT */}
            <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
            <Link href="/" className='flex items-center gap-2'>
              <Image src="/logo.png" alt='logo' width={34} height={28}/>
            <div className='text-2xl tracking-wide font-sans'> PxShopify </div>
             </Link>
              <div className='hidden xl:flex gap-4'>
                <Link href="/"> Homepage </Link>
                <Link href="/"> Shop </Link>
                <Link href="/"> Deals </Link>
                <Link href="/"> About </Link>
                <Link href="/"> Contact </Link>
              </div>
           </div>
                  {/* RIGHT */}
            <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
              <SearchBar />
              <Navicons />
             </div>
          </div>
    </div>
  )
}

export default Navbar;