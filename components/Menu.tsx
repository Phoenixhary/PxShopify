"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <HiOutlineMenuAlt1 onClick={() => setOpen((prev) => !prev)}
       size='30' className='cursor-pointer' />
       {
        open && (
          <div className='flex flex-col items-center justify-center gap-8 z-10 text-xl absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-20px)]'>
            <Link href="/"> Home </Link>
            <Link href="/"> Shop </Link>
            <Link href="/"> Deals </Link>
            <Link href="/"> About </Link>
            <Link href="/"> Contact </Link>
            <Link href="/"> Logout </Link>
            <Link href="/"> Cart(1) </Link>
          </div>
        )
       }
    </div>
  )
}

export default Menu;