import Add from '@/components/Add';
import CustomizeProducts from '@/components/CustomizeProducts';
import ProductImages from '@/components/ProductImages';
import React from 'react'

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 relative flex flex-col lg:flex-row gap-16'>
              {/* IMG */}
        <div className='w-full lg:w-1/2 lg:sticky top-1 h-max p-4'>
            <ProductImages />
        </div>
              {/*TEXTS */}
        <div className='flex flex-col gap-6 w-full lg:w-1/2'> 
            <div className='text-4xl font-medium'> Product Name </div>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Accusantium consectetur rem modi suscipit vero, quia debitis.
                Assumenda neque aliquam beatae.
            </p>
            <div className='h-[2px] bg-gray-100' />
              <div className='flex items-center gap-4'>
               <h1 className='text-xl text-gray-500 line-through'> $59 </h1>
               <h1 className='font-medium text-2xl'> $46 </h1>
            </div>
            <div className='h-[2px] bg-gray-100' />
              <CustomizeProducts />
              <Add /> 
            <div className='h-[2px] bg-gray-100' />
            
              <div className='text-sm'>
                <h2 className='font-medium mb-4'>Title</h2>
                   <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Laboriosam est temporibus unde fugiat iste laborum ipsam nam quibusdam ratione, 
                   aliquam sed ipsum nesciunt atque harum optio consectetur itaque officia velit!
                    Aspernatur perferendis omnis obcaecati iure sequi tenetur! Iusto, nesciunt voluptatibus.
                   </p>
              </div>

              <div className='text-sm'>
                <h2 className='font-medium mb-4'>Title</h2>
                   <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Laboriosam est temporibus unde fugiat iste laborum ipsam nam quibusdam ratione, 
                   aliquam sed ipsum nesciunt atque harum optio consectetur itaque officia velit!
                    Aspernatur perferendis omnis obcaecati iure sequi tenetur! Iusto, nesciunt voluptatibus.
                   </p>
              </div>

              <div className='text-sm'>
                <h2 className='font-medium mb-4'>Title</h2>
                   <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Laboriosam est temporibus unde fugiat iste laborum ipsam nam quibusdam ratione, 
                   aliquam sed ipsum nesciunt atque harum optio consectetur itaque officia velit!
                    Aspernatur perferendis omnis obcaecati iure sequi tenetur! Iusto, nesciunt voluptatibus.
                   </p>
              </div>

         </div>
  </div>
  )
}

export default SinglePage;