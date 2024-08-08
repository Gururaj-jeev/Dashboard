import React from 'react';
import { data } from '../data/OrderData.jsx';
// import DashboardStats from "./componets/DashboardStats";

import { CircleArrowRight } from 'lucide-react'

const Orders = () => {
  return (
    <div className='w-auto '>
    <div className='flex justify-between p-4 '>
     
    
    </div>
    <div className='p-4'>
      
      <div className='w-auto p-4 m-auto overflow-y-auto bg-white border rounded-lg'>
      <h2 className='text-3xl font-bold'>Recent orders</h2>
        <div className='grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer md:grid-cols-4 sm:grid-cols-3'>
          <span>Customer</span>
          <span className='text-right sm:text-left'>Order No</span>
          <span className='hidden md:grid'>Amount</span>
          <span className='hidden sm:grid'>Status</span>
        </div>
        <ul>
          {data.map((order, id) => (
              <li key={id} className='grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3'>
                  <div className='flex items-center'>
                      <div className='p-3 bg-purple-100 rounded-lg'>
                          <CircleArrowRight className='text-purple-800' />
                      </div>
                      <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                  </div>
                  <p className='text-right text-gray-600 sm:text-left'>{order.order}</p>
                  <p className='hidden md:flex'>{order.Amount}</p>
                  <div className='items-center justify-between hidden sm:flex '>
                  <p
              className={`border rounded-3xl px-2 py-2  ${
                order.Status === 'Delivered'
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {order.Status}
            </p>
                      
                      <CircleArrowRight />
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