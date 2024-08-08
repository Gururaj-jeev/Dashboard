import React from 'react'
import { CircleArrowRight } from 'lucide-react'
import { Goal } from 'lucide-react'
import { CookingPot } from 'lucide-react'
import { Utensils } from 'lucide-react'

const Data = () => {
  return (
    <div className='relative items-end w-auto col-span-1 p-4 m-auto bg-white border rounded-lg pe-8 '>
  
    <ul>
   
        <li
       
          className='flex items-center p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
        >
          <div className='p-3 bg-purple-100 rounded-lg'>
            <Goal className='text-purple-800' />
          </div>
          <div className='pl-4'>
            <p className='font-bold text-gray-800'>Goals</p>
         
          </div>
          <p className='absolute text-sm lg:flex md:hidden right-6'>< CircleArrowRight/></p>
        </li>
        <li
       
          className='flex items-center p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
        >
          <div className='p-3 bg-purple-100 rounded-lg'>
            <CookingPot className='text-purple-800' />
          </div>
          <div className='pl-4'>
            <p className='font-bold text-gray-800'>Popular Dishes</p>
   
          </div>
          <p className='absolute text-sm lg:flex md:hidden right-6'>< CircleArrowRight/></p>
        </li>
        <li
       
          className='flex items-center p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
        >
          <div className='p-3 bg-purple-100 rounded-lg'>
            <Utensils className='text-purple-800' />
          </div>
          <div className='pl-4'>
            <p className='font-bold text-gray-800'>Menus</p>
        
          </div>
          <p className='absolute text-sm lg:flex md:hidden right-6'>< CircleArrowRight/></p>
        </li>
   
    </ul>
  </div>
  );
};
  


export default Data
