import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll mt-6 scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>
            
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>

            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6 '>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>

            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>

            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>

            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>

            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>

            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
                <div className='relative bg-slate-200 w-full h-72 rounded-md'>
                    <Image src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes='20vw'
                     className='object-cover rounded-md' />
                </div>
                <h2 className='mt-4 font-light text-lg tracking-wide'> Category name </h2>
            </Link>

        </div>
    </div>
        
  )
}

export default CategoryList;