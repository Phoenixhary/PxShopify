"use client"
import React, { useState } from 'react'

const Trial = () => {
            const [yes, setYes] = useState(false);

  return (
    <div className='mt-4'> 
        <div onClick={() => setYes((prev) => !prev)} className=" ring-1 ring-lava w-1/3 p-2">
         { 
            yes && (
                <>
                <div> bankai </div>
                <div> zangetsu </div>
                </>
            )  
          }
        </div>
    </div>
  )
}

export default Trial;