"use client"
// import { url } from 'inspector';
import Image from 'next/image';
import React, { useState } from 'react'

    const images = [
      {
        id: 1,
        url: "https://images.pexels.com/photos/13257111/pexels-photo-13257111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/13257109/pexels-photo-13257109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/4226877/pexels-photo-4226877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ];
const ProductImages = () => {

        const [index, setIndex] = useState(0)
  return (
    <div className=''>
        <div className='relative h-[500px]'>
            <Image src={images[index].url}
            alt='' fill sizes='50vw' className='object-cover rounded-md'
             />
        </div>

        <div className='flex justify-between gap-4 '> 
        {images.map((img, i) => (
                 <div className="relative w-1/4 h-32 gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}> 
                 <Image src={img.url}
                 alt="" fill sizes="30vw" className="object-cover rounded-md"
                  /> 
                  </div>
              ))}
        </div>
            
    </div>
  )
}

export default ProductImages;