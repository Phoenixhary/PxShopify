"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
        const router = useRouter();
        const handleSearch = (e: React.FormEvent <HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const name = formData.get("name") as string;
          if(name) {
              router.push(`/list?name=${name}`)
          }
        }

  return (
      <form onSubmit={handleSearch}
      className='flex flex-1 justify-between gap-4 bg-gray-100 rounded-xl '>
          <input className='border-none flex-1 bg-transparent' type="text" placeholder='Search...' name='name' />
          <button>
          <FiSearch className='mx-2' />
          </button>
      </form>
  
  )
}

export default SearchBar;