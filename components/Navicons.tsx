"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import CartModel from '@/components/CartModel';

const Navicons = () => {
        const [isProfileOpen, setIsProfileOpen] = useState(false)
        const [isCartOpen, setIsCartOpen] = useState(false)

        const router = useRouter();
          // TEMPORARY
        const isLoggedIn = false

        const handleProfile = () => {
            if (isLoggedIn) {
              router.push("/login");
            }
            setIsProfileOpen((prev) => !prev);
        };

  return (
    <div className='flex items-center gap-4 relative '>
        <BsFillPersonLinesFill size="20" className='cursor-pointer' onClick={handleProfile} />
          {
          isProfileOpen &&
           <div className='absolute top-10 p-4 rounded-md left-0 shadow-2xl z-20'>
            <Link href="/"> Profile </Link>
            <div className='mt-2 cursor-pointer'> Logout </div>
           </div>
          }
        <IoNotificationsOutline size="20"  />
          <div className='cursor-pointer relative' onClick={() => setIsCartOpen((prev) => !prev)}>
        <FiShoppingCart size="20" className='cursor-pointer'  />
          <div className='absolute -top-4 -right-3 w-4 bg-lava rounded-full text-sm text-white flex items-center justify-center'>2</div>
          </div>
        {isCartOpen && <CartModel />}
          
    </div>
  )
}

export default Navicons;