/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react';
import { IoClose } from "react-icons/io5";


const ToDo = ({list}) => {
  return (

      <div className='absolute mx-8 mt-44 w-[84%] 
     bg-slate-800 rounded-md left-0 right-0 text-sm text-gray-200 dark:bg-white h-12 items-center'>

         <ul className='flex flex-col w-full'>
          {list.map((item) => (
            <li key={item.id} className='flex justify-between w-full p-5 items-center'>
            <span className='flex  items-center gap-2'>
              <input type="checkbox" className='accent-red-700' />
              <p>{ item.text}</p>
            </span>
            <IoClose />
          </li>
          ))}
          
         </ul>
</div>
  )
}

export default ToDo