"use client"

import {Bar}  from "react-chartjs-2";
import React from 'react'
import{
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,} from "chart.js"


// const chartData={
//   lables:["rent" ,"Groceries" ,"dress", "mobile","car"],
//   datasets:[
//     {
//     label:"Expenses",
//     data:[1200, 34, 3434, 3434, 232],
//     backgroundColour:"rgba(225,99,132,0.2)",
//     borderColour:"rgba(54,162,235,1)",
//     borderWidth:1,
//     }
//   ],
// };

 

// const salesData = [
//   {
//     name: 'Jan',
//     revenue: 4000,
//     profit: 2400,
//   },
//   {
//     name: 'Feb',
//     revenue: 3000,
//     profit: 1398,
//   },
//   {
//     name: 'Mar',
//     revenue: 9800,
//     profit: 2000,
//   },
//   {
//     name: 'Apr',
//     revenue: 3908,
//     profit: 2780,
//   },
//   {
//     name: 'May',
//     revenue: 4800,
//     profit: 1890,
//   },
//   {
//     name: 'Jun',
//     revenue: 3800,
//     profit: 2390,
//   },
// ];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const Chart = () => {
return(

<div className="relative w-auto m-auto ml-12 bg-white border rounded-lg md:col-span-2 ">
  <strong className="font-medium text-white">Activity</strong>
  <div className="flex-1 text">

   <Bar className=""
   width={500}
   height={200}
   margin={{
    top:10,
    right:10,
    left:-10,
    bottom:40
   }}
   data={{
    labels:["5","9","11","13","15","17","19","21","23" ,"27","15","17","19","21","15","17","19","21","15","17","19","21" ],
    datasets:[
      {
      label:"Revenue",
      data:[0,5,10,15,20,25,30,54,23,23,54,21,19,9,6,1,4,5,7,2,13],
      options: {
        layout: {
            padding: {
                left: 80,
                top:20,
                right:10
            }
        }
    },
      backgroundColor: [
        'rgba(46, 88, 217, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)'
        
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)'
       
      ],
      borderWidth: 1
      },

    ],
  }}
   
   />

</div>
</div>
);
};

export default Chart;

