import React from 'react'
import { Utensils } from 'lucide-react'
import { Star } from 'lucide-react';

const Feedback = () => {
  return (
    <div>
      <div className='w-full col-span-1 relative lg:h-[70vh] scroll-auto h-[50vh] m-auto p-4 border rounded-lg bg-zinc-900 overflow-scroll'>
      <h1 className="text-3xl text-white " >Customer's Feedback</h1>
      <ul className='pt-8 pl-4 scroll-auto'>
        <l className="text-2xl text-white">Jenny wilson</l>
        <p className='flex'> 
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star />
        </p>
       <l className="text-white">Renowned for its exceptional service and soothing live music, this hotel's restaurant offers an unforgettable dining experience. A popular venue for weddings, it also boasts stunning views and delicious cuisine.</l>
       <p className='w-full pt-4 border-b-2'></p>
      </ul>
      <ul className='pt-8 pl-4'>
        <l className="text-2xl text-white">Jenny wilson</l>
        <p className='flex'> 
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
   
        </p>
       <l className="text-white">The services and food was very good and the view was nice best place to visit the food was very tatsty with reasonable price</l>
       <p className='w-full pt-4 border-b-2'></p>
      </ul>
      <ul className='pt-8 pl-4'>
        <l className="text-2xl text-white">Jenny wilson</l>
        <p className='flex'> 
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star color="#e3d645" strokeWidth={1.75} />
        <Star />
        <Star />
        </p>
       <l className="text-white">It was a great experience and loved the food too.
       And the staffs were friendly and overall great time and everything was superb.</l>
       <p className='w-full pt-4 border-b-2'></p>
      </ul>
    </div>
    </div>
  )
}

export default Feedback
