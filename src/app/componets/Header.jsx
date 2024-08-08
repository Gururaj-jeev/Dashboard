import React from 'react'
import { Search} from 'lucide-react'
import { Mail} from 'lucide-react'
import { Settings} from 'lucide-react'
import { Bell} from 'lucide-react'

const Header = () => {
  return (
   <>
   <div className='flex items-start justify-between h-16 px-4 pt-2 text-gray-200 bg-black'>
    <div className='relative'>
    <Search  className="absolute text-gray-400 -translate-y-1/2 top-1/2 left-3 "color="#6d6969" />
      <input type="text" placeholder='Search' className='h-10 text-lg border rounded-2xl border-gray-300 pl-11 pr-4   focus:outline-none active:outline-none w-[24rem]' ></input>
    </div>
 <div className='flex items-center gap-6 pt-2 mr-2'> 
 <Mail  className='w-10 h-10 ' color="#6d6969" />
 <Settings className='w-10 h-10 ' color="#6d6969" />
 <Bell className='w-10 h-10 ' color="#6d6969" />
 {/* <div className="flex ml-2 text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600">
							<span className="sr-only">Open user menu</span>
							<div
								className="w-10 h-10 bg-white bg-center bg-no-repeat bg-cover rounded-full"
								style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
							>
							
							</div>
						</div> */}

<div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>

 </div>
 
   </div>
   </>
  )
}

export default Header
