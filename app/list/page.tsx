
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Image from 'next/image';
import React from 'react'

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
                                    {/* CAMPAIGN */}
      <div className='hidden bg-gray-100 p-6 m-auto sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-10 '> 
          <h1 className='text-4xl font-semibold text-gray-700 leading-10 '> Lorem ipsum dolor sit amet <br></br> consectetur adipisicing elit.</h1>  
          <button className='rounded-3xl text-white bg-lava w-max py-3 px-5 text-sm'>  Buy now </button>
         </div>
        <div className='relative w-1/3 cursor-pointer '> 
          <Image src="/campaign.png" alt="" fill className='object-contain ' />
         </div>
      </div> 
                                  {/* FILTER */}
        <Filter />
                                    {/* PRODUCT */}
          <h2 className='mt-12 text-xl font-semibold'> Shoes for You</h2>
        <ProductList />
    </div>
  )
}

export default ListPage;