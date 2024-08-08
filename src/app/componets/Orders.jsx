import React from 'react';
import { data } from '../data/OrderData.jsx';
// import DashboardStats from "./componets/DashboardStats";

import { CircleArrowRight } from 'lucide-react'
import {CircleUserRound  } from 'lucide-react'

const Orders = () => {
  return (
    <div className='w-auto '>
    <div className='flex justify-between p-4 '>
     
    
    </div>
    <div className='p-4'>
      
      <div className='w-auto p-4 m-auto overflow-y-auto border rounded-lg bg-zinc-900'>
      <h2 className='text-3xl font-bold text-white'>Recent orders</h2>
        <div className='grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer md:grid-cols-4 sm:grid-cols-3'>
          <span className='text-white'>Customer</span>
          <span className='text-right text-white sm:text-left'>Order No</span>
          <span className='hidden text-white md:grid'>Amount</span>
          <span className='hidden text-white sm:grid'>Status</span>
        </div>
        <ul>
          {data.map((order, id) => (
              <li key={id} className='grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-zinc-900 hover:bg-slate-700 md:grid-cols-4 sm:grid-cols-3'>
                  <div className='flex items-center'>
                      <div className='p-3 bg-purple-100 rounded-lg'>
                          <CircleUserRound size={28} strokeWidth={1} className='text-purple-800' />
                      </div>
                      <p className='pl-4 text-white'>{order.name.first + ' ' + order.name.last}</p>
                  </div>
                  <p className='text-right text-white sm:text-left'>{order.order}</p>
                  <p className='hidden text-white md:flex'>{order.Amount}</p>
                  <div className='items-center justify-between hidden sm:flex '>
                  <p
              className={`border rounded-3xl px-2 py-2  text-white ${
                order.Status === 'Delivered'
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {order.Status}
            </p>
                      
                   
                  </div>
              </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Orders;