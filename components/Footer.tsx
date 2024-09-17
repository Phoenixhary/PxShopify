import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiDiscover, SiVisa, SiMastercard } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='mt-24 px-3 py-24 md:px-8 lg:px-16 xl:px-32 bg-gray-100 text-sm'> 
          {/* TOP */}
        <div className='flex flex-col md:flex-row justify-between gap-10 p-24'>
                {/* LEFT */}
            <div className=' w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
                <Link href="">
                  <div className='text-2xl tracking-wide'> PHX </div>
                </Link>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime recusandae.
                </p>
                <span className='font-medium'> hello@gmail.com</span>
                <span className='font-medium'>+234 222 111 000</span>
                <div className='flex gap-6'>
                  <FaFacebook className='text-blue-500' />
                  <FaInstagram className='text-red-600' />
                  <FaYoutube className='text-red-500' />
                  <FaPinterest className='text-red-500' />
                  <FaXTwitter className='text-black' />
                </div>
             </div>

                {/* CENTER */}
            <div className='w-1/2 hidden lg:flex justify-between'>
              <div className='flex flex-col gap-14'>
                <h1 className='font-medium text-lg'> COMPANY </h1>
                <div className='flex flex-col gap-6'>
                    <Link href=""> About Us </Link>
                    <Link href=""> Career </Link>
                    <Link href=""> Affilaites </Link>
                    <Link href=""> Blog </Link>
                    <Link href=""> Contact Us </Link>
                </div>
              </div>
              
              <div className='flex flex-col gap-14'>
                <h1 className='font-medium text-lg'> COMPANY </h1>
                <div className='flex flex-col gap-6'>
                    <Link href=""> About Us </Link>
                    <Link href=""> Career </Link>
                    <Link href=""> Affilaites </Link>
                    <Link href=""> Blog </Link>
                    <Link href=""> Contact Us </Link>
                </div>
              </div>

              <div className='flex flex-col gap-14'>
                <h1 className='font-medium text-lg'> COMPANY </h1>
                <div className='flex flex-col gap-6'>
                    <Link href=""> About Us </Link>
                    <Link href=""> Career </Link>
                    <Link href=""> Affilaites </Link>
                    <Link href=""> Blog </Link>
                    <Link href=""> Contact Us </Link>
                </div>
              </div>

             </div>
                {/* RIGHT */}
            <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 mt-12 md:mt-0'>
              <h1 className='font-medium text-lg'> SUBSCRIBE </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, neque.
              </p>
              <div className='flex'>
                 <input type='text' placeholder='Email Address' className='p-4 w-3/4'/>
                 <button className='bg-lava text-white w-1/4'> JOIN </button>
              </div>
                 <span className='font-semibold'> Secure Payment </span>
                 <div className='flex justify-between items-center'>
                    <SiDiscover size={50} />
                    <FaCcPaypal className='text-indigo-500' size={30} />
                    <SiVisa className='text-blue-900' size={30} />
                    <SiMastercard className='' size={30} />
                 </div>    
             </div>
       </div>

            {/* BOTTOM */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
                <div className=''> 2024 Pxshopify</div>
                <div className='flex flex-col gap-8 md:flex-row'> 
                  <div>
                    <span className='text-gray-500'> Language</span>
                    <span className='font-medium'> Nigeria | English </span>
                  </div>
                  <div>
                    <span className='text-gray-500'> Currency</span>
                    <span className='font-medium'> # NGN </span>
                  </div>
               </div>
            </div>
          
    </div>
  )
}

export default Footer;
