import Image from "next/image";
import Sidebar ,{SidebarItem}from "./componets/Sidebar";
import Header from "./componets/Header";
import { House } from 'lucide-react'
import { ChartColumnIncreasing } from 'lucide-react'
import { ClipboardCheck } from 'lucide-react'
import { Wallet } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'
import DashboardStats from "./componets/DashboardStats";

import Data from "./componets/Data";
import Chart from "./componets/Chart";
import Orders from "./componets/Orders";
import Feedback from "./componets/Feedback";




export default function page() {
  return (
<div className="flex flex-row w-screen h-screen overflow-hidden bg-black ">
 
<Sidebar>
  <div className="">
  <SidebarItem icon={<House size={36} color="#5564d8" strokeWidth={2.25} />} text="Home" alert />
  <SidebarItem icon={<ChartColumnIncreasing size={36} color="#5564d8" strokeWidth={2.25} />} text="Home" alert />
  <SidebarItem icon={<ClipboardCheck  size={36} color="#5564d8" strokeWidth={2.25} />} text="Home" alert />
  <SidebarItem icon={<Wallet   size={36} color="#5564d8" strokeWidth={2.25} />} text="Home" alert />
  <SidebarItem icon={<ShoppingBag  size={36} color="#5564d8" strokeWidth={2.25} />} text="Home" alert />
  </div>
</Sidebar>


<div className="flex-col flex-1 pr-4">
  <div className="w-full"><Header/> </div>

<div className="w-full h-full pt-4 pl-2 20 ">
<DashboardStats className="h-24"/>
<div className='grid flex-1 w-auto grid-cols-2 gap-2 p-4'>
  <div className="">
          <Chart className /></div>
          <div>     <Data /></div>
          <Orders/>
          <Feedback/>
 
        </div>
</div>
 
</div  >


</div>
);
}
