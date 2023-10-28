import React from 'react'
import {BsFillFileCheckFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

export default function Dashboard() {
  return (
    <div className='px-16 py-8 overflow-hidden h-screen'>
      <div className='flex'>
        <div className='font-semibold text-gray-300'>
          <div>Welcome back,</div>
          <div className='text-4xl'>Sagar Rana</div>
        </div>
        <div className='ml-auto flex items-center'>
          <button className='flex items-center gap-2 bg-blue-500 text-lg font-bold hover:bg-blue-700 text-white py-4 px-11 rounded-lg '>
            <BsFillFileCheckFill/> <div>Health Check</div>
          </button>
          <button className='flex items-center gap-2 bg-red-500 text-lg hover:bg-red-700 text-white font-bold py-4 px-11 ml-4 rounded-lg'>
            <FiLogOut/> <div>Logout</div>
          </button>
        </div>
      </div>
      <div className='h-screen flex pt-8'>
      <div className='grid grid-cols-3 grid-rows-3 gap-4 w-full h-5/6'>
        <div className='col-span-2 row-span-1 bg-gray-700 opacity-70 rounded-2xl'></div>
        <div className='col-span-1 row-span-2 bg-gray-700 opacity-70 rounded-2xl'></div>
        <div className='col-span-1 row-span-1 bg-gray-700 opacity-70 rounded-2xl'></div>
        <div className='col-span-1 row-span-1 bg-gray-700 opacity-70 rounded-2xl'></div>
        <div className='col-span-2 row-span-1 bg-gray-700 opacity-70 rounded-2xl'></div>
        <div className='col-span-1 row-span-1 bg-gray-700 opacity-70 rounded-2xl'></div> 
      </div>
    </div>
    </div>
  );
}