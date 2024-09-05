import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className='relative w-full h-80'>
            <Image src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt='' fill sizes='25vw' className='absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
            <Image src="https://images.pexels.com/photos/11515551/pexels-photo-11515551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt='' fill sizes='25vw' className='absolute rounded-md object-cover' />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'> Product name </span>
          <span className='font-semibold'> $48 </span>
        </div>
        <div className='text-sm text-gray-400'> description</div>
        <button className='rounded-full ring-1 ring-lava py-2 px-4 text-xs text-lava w-max hover:bg-lava hover:text-white'> Add to Cart</button>
        </Link>
    </div>
  )
};

export default ProductList;

