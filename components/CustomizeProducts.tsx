import React from 'react'

const CustomizeProducts = () => {
  return (

    <div className='flex flex-col gap-6'>

      <h1 className='font-medium'>Choose a color</h1>
      <ul className='flex items-center gap-3'>
          <li className='h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
            <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> </div>
          </li>  
          <li className='h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>  </li>  
          <li className='h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500'> 
          <div className='absolute w-10 h-[2px] bg-lava top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45'> </div>
           </li>  
       </ul>

      <h1 className='font-medium'> Choose a size</h1>
      <ul className='flex items-center gap-3'>
        <li className='ring-1 ring-lava text-lava rounded-md py-1 px-4 text-sm cursor-pointer'> 
          Small
         </li>
        <li className='ring-1 ring-pink-200 text-white bg-lava rounded-md py-1 px-4 text-sm cursor-pointer'> 
          medium
         </li>
        <li className='ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed'> 
          large
         </li>
       </ul>

    </div>
  )
}

export default CustomizeProducts;