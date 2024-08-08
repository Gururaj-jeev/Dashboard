import React from 'react'
import { CircleArrowRight } from 'lucide-react'
import { Goal } from 'lucide-react'
import { CookingPot } from 'lucide-react'
import { Utensils } from 'lucide-react'

const Data = () => {
  return (
    <div className='relative items-end w-auto col-span-1 p-4 m-auto border rounded-lg bg-zinc-900 pe-8 '>
  
    <ul>
   
        <li
       
          className='flex items-center p-2 my-3 rounded-lg cursor-pointer bg-zinc-900 hover:bg-slate-700'
        >
          <div className='p-3 bg-purple-100 rounded-lg'>
            <Goal className='text-purple-800' />
          </div>
          <div className='pl-4'>
            <p className='font-bold text-white'>Goals</p>
         
          </div>
          <p className='absolute pr-4 text-sm lg:flex md:hidden right-6'>< CircleArrowRight/></p>
        </li>
        <li
       
          className='flex items-center p-2 my-3 rounded-lg cursor-pointer bg-zinc-900 hover:bg-slate-700'
        >
          <div className='p-3 bg-purple-100 rounded-lg'>
            <CookingPot className='text-purple-800' />
          </div>
          <div className='pl-4'>
            <p className='font-bold text-white'>Popular Dishes</p>
   
          </div>
          <p className='absolute pr-4 text-sm lg:flex md:hidden right-6 '>< CircleArrowRight/></p>
        </li>
        <li
       
          className='flex items-center p-2 my-3 rounded-lg cursor-pointer bg-zinc-900 hover:bg-slate-700'
        >
          <div className='p-3 bg-purple-100 rounded-lg'>
            <Utensils className='text-purple-800' />
          </div>
          <div className='pl-4'>
            <p className='font-bold text-white'>Menus</p>
        
          </div>
          <p className='absolute pr-4 text-sm lg:flex md:hidden right-6'>< CircleArrowRight/></p>
        </li>
   
    </ul>
  </div>
  );
};
  


export default Data
