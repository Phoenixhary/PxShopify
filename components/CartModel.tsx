import Image from 'next/image';
import React from 'react'

const CartModel = () => {
     const cartItems = true
  return (      

    <div className='w-max absolute p-4 rounded-md shadow-lg bg-white top-12 right-0 gap-6 z-20 flex flex-col'>
      {!cartItems ? (
        <div> Cart is Empty </div>
      ) : (
      <>
        <h1 className='text-lg font-medium'> Shopping Cart </h1>
                {/* LIST */ }
      <div className='flex flex-col gap-8'>
                            {/* CART ITEM */}
        <div className='flex gap-4'>
          <Image className='object-cover rounded-md'
          src="https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt='' width={52} height={70}  />
          <div className='flex flex-col justify-between w-full'>
                  {/* TOP */}
              <div className=''> 
                  {/* TITLE */}
                <div className='flex justify-between gap-8'> 
                  <h3 className='font-medium'> Product Name </h3>
                  <div className='bg-gray-100 rounded-lg'> $49 </div>
                </div>
                  {/* DESC */}
                  <div className='text-sm text-gray-500'>
                      available
                   </div>
              </div>
                  {/* BOTTOM */}
                  <div className='flex justify-between text-sm'> 
                    <span className='text-gray-500'> Qty. 2</span>
                    <span className='text-red-500'> Remove</span>
                  </div>
           </div>
       </div>
                            {/* CART ITEM 2 */}
        <div className='flex gap-4'>
          <Image className='object-cover rounded-md'
          src="https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt='' width={52} height={70}  />
          <div className='flex flex-col justify-between w-full'>
                  {/* TOP */}
              <div className=''> 
                  {/* TITLE */}
                <div className='flex justify-between gap-8'> 
                  <h3 className='font-medium'> Product Name </h3>
                  <div className='bg-gray-100 rounded-lg'> $49 </div>
                </div>
                  {/* DESC */}
                  <div className='text-sm text-gray-500'>
                      available
                   </div>
              </div>
                  {/* BOTTOM */}
                  <div className='flex justify-between text-sm'> 
                    <span className='text-gray-500'> Qty. 2</span>
                    <span className='text-red-500'> Remove</span>
                  </div>
           </div>
       </div>                       
      </div>      
                          {/* BOTTOM DESC */}
        <div>
            <div className='flex items-center justify-between font-medium'>
                <h3>subtotal </h3>
                <h3> $49 </h3>
            </div>
            <p className='text-gray-500 text-sm mt-2'>
               Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='flex justify-between text-sm mt-2'>
              <button className='rounded-md py-2 px-4 ring-1 ring-gray-300'>view Cart </button>
              <button className='rounded-md py-2 px-4 bg-black text-white'>Checkout </button>
            </div>
         </div>
      </>
      )}
    </div>
  )
}

export default CartModel;