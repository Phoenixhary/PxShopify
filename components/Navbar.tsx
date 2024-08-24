import Link from 'next/link';
import React from 'react'
import Menu from '@/components/Menu';

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32'>
      {/* MOBILE */}
      <Link href="/"> PxShopify</Link>
      <Menu />
    </div>
  )
}

export default Navbar;