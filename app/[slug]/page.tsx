import Add from '@/components/Add';
import CustomizeProducts from '@/components/CustomizeProducts';
import ProductImages from '@/components/ProductImages';
import { wixClientServer } from '@/lib/wixClientServer';
// import { products } from '@wix/stores';
import { notFound } from 'next/navigation';
import React from 'react'

const SinglePage = async ({ params }: {params: { slug: string } }) => {
 
    // console.log(params.slug)
  const wixClient = await wixClientServer()

  const products = await wixClient.products
  .queryProducts()
  .eq("slug", params.slug)
  .find();

  if (!products.items[0]) {
    return notFound();

  };
  const product = products.items[0]; 

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 relative flex flex-col lg:flex-row gap-16'>
              {/* IMG */}
        <div className='w-full lg:w-1/2 lg:sticky top-1 h-max p-4'>
            <ProductImages items={product.media?.items} />
        </div>
              {/*TEXTS */}
        <div className='flex flex-col gap-6 w-full lg:w-1/2'> 
            <div className='text-4xl font-medium'>  {product.name} </div>
            <p className='text-gray-500'>
              {product.description}
            </p>
            <div className='h-[2px] bg-gray-100' />
                {product.price?.price === product.price?.discountedPrice ?
                 ( <h1 className='font-medium text-2xl'> ${product.price?.price} </h1>) 
                 : ( 
                  <div className='flex items-center gap-4'>
                  <h1 className='text-xl text-gray-500 line-through'> ${product.price?.price} </h1>
                  <h1 className='font-medium text-2xl'> ${product.price?.discountedPrice} </h1>
                  </div>
                )}
            <div className='h-[2px] bg-gray-100' />
              <CustomizeProducts />
              <Add /> 
            <div className='h-[2px] bg-gray-100' />
            
             {product.additionalInfoSections?.map( (section:any) =>(
               
               <div className='text-sm' key={section.title}>
               <h2 className='font-medium mb-4'>{section.title}</h2>
               <p>
                {section.description}
               </p>
               </div>
                ))
              };

         </div>
  </div>
  )
}

export default SinglePage;