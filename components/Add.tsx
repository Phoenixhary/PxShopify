"use client"
import React, { useState } from 'react'

const Add = () => {

  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  const stock = 4

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-medium'> Choose a Quantity </h1>
      <div className='flex justify-between'>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex items-center justify-between bg-gray-100 py-2 px-4 rounded-3xl w-32'>
              <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("d")}> - </button>
                {quantity}
              <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("i")}> + </button>
           </div>
          <div 
          className='text-xs'> Only 4 items left! <br/> {"Don't"} miss it
          </div>
        </div>
      <button
       className='w-36 text-sm rounded-3xl ring-1 ring-lava text-lava py-2 px-4 hover:bg-lava hover:text-white
       disabled:cursor-not-allowed disabled:text-white disabled:bg-pink-200 disabled:ring-none '>
        Add to Cart
       </button>
      </div>
    </div>
  )
}

export default Add;