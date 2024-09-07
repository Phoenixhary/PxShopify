import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex  justify-between'>
                      {/* LEFT */}
        <div className='flex flex-wrap gap-6'> 
            <select name='type' id=''
             className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option> Type </option>
                <option value=""> Physical </option>
                <option value=""> Digital </option>
            </select>

            <input type='text' name='min' placeholder='min price' className='text-xs rounded-xl pl-2 w-24 ring-1 ring-gray-200' />
            <input type='text' name='max' placeholder='max price' className='text-xs rounded-xl pl-2 w-24 ring-1 ring-gray-200' />

            <select name='size' id=''
             className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option> Size </option>
                <option value=""> Size </option>
            </select>

            <select name='color' id=''
             className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option> color </option>
                <option value=""> color </option>
                <option value=""> Digital </option>
            </select>

            <select name='type' id=''
             className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option> Category </option>
                <option value=""> Physical </option>
                <option value=""> Digital </option>
            </select>


        </div>
                      {/* RIGHT */}
        <div>  
           <select name='type' id=''
             className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option> Sort By </option>
                <option value=""> Price (low to high) </option>
                <option value=""> Price (high to low) </option>
                <option value=""> Newest </option>
                <option value=""> Oldest </option>
            </select>
        </div>
    </div>
  )
}

export default Filter;