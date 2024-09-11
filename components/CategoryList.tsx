import { wixClientServer } from '@/lib/wixClientServer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CategoryList = async () => {

    const wixClient = await wixClientServer()

    const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className='px-4 overflow-x-scroll mt-6 scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            {cats.items.map(item => (

                <Link href={`/list?cat=${item.slug}`} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'
                key={item._id}
                >
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src={item.media?.mainMedia?.image?.url || "cat.png"} alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> {item.name} </h2>
            </Link>
        ))}
            
            
        </div>
    </div>
        
  )
}

export default CategoryList;