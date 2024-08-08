import React from 'react'

import { ShoppingBag } from 'lucide-react'


export default function DashboardStats() {
	return ( 
		<div className="flex justify-between h-48 gap-4 ">
			<BoxWrapper >
				<div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-500">
					<ShoppingBag color="#3a2bab" className="text-2xl text-white" />
				</div>
				<div className="">
					<span className="text-sm font-light text-white">Total Orders</span>
					<div className="flex items-center justify-between ">
						<strong className="pt-4 text-4xl font-semibold text-white ">75</strong>
						<span className="items-end pt-8 pl-12 text-sm text-green-500 ">3%</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-2xl">
                <ShoppingBag color="#3a2bab" className="text-2xl text-white" />
				</div>
				<div className="">
					<span className="text-sm font-light text-white">Total Delivered</span>
					<div className="flex items-center">
						<strong className="mt-4 text-4xl font-semibold text-white">70</strong>
						<span className="items-end pt-8 pl-12 text-sm text-red-500">3%</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-2xl">
                <ShoppingBag color="#3a2bab" className="text-2xl text-white" />
				</div>
				<div className="">
					<span className="text-sm font-light text-white">Total Cancelled</span>
					<div className="flex items-">
						<strong className="mt-4 text-4xl font-semibold text-white">05</strong>
						<span className="items-end pt-8 pl-12 text-sm text-green-500">3%</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-2xl">
                <ShoppingBag color="#3a2bab" className="text-2xl text-white" />
				</div>
				<div className="">
					<span className="text-sm font-light text-white">Total Revenue</span>
					<div className="flex items-center">
						<strong className="mt-4 text-4xl font-semibold text-white ">$12K</strong>
						<span className="items-end pt-8 pl-12 text-sm text-red-500">3%</span>
					</div>
				</div>
			</BoxWrapper>
 <div className='flex items-center w-6/12 border card bg-base-100 rounded-xl bg-zinc-900 basis-1/3'>
				<div className='m-4 '>
					<p className='text-2xl text-white'>Net profit</p>
					<p className='text-5xl text-white'>$6759.25</p>
					<p className='pt-4 text-green-400'>3%</p>
					<div className="radial-progress" style={{ "--value": 70 }} role="progressbar">
  70%
</div>
					
				</div>
				</div>  
		</div>
	) 
}

function BoxWrapper({ children }) {
	return <div className="flex flex-col items-start flex-1 p-8 border border-gray-200 bg-zinc-900 bore w-96 rounded-xl">{children}</div>
}