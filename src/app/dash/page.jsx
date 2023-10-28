"use client";

import React from 'react'
import {BsFillFileCheckFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Image from 'next/image';
import {CgProfile} from 'react-icons/cg'
import {GrDocumentText} from 'react-icons/gr'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {LuSettings} from 'react-icons/lu'
import Link from "next/link";


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
            <BsFillFileCheckFill/> <div><Link href="/dash/form">
        SasthoSathi
      </Link></div>
          </button>
          <button className='flex items-center gap-2 bg-red-500 text-lg hover:bg-red-700 text-white font-bold py-4 px-11 ml-4 rounded-lg'>
            <FiLogOut/> <div>Logout</div>
          </button>
        </div>
      </div>
      <div className='h-screen flex pt-8'>
      <div className='grid grid-cols-3 grid-rows-3 gap-4 w-full h-5/6'>
        <div className='col-span-2 row-span-1 bg-gray-700 opacity-70 rounded-2xl'>

        </div>
        <div className='col-span-1 row-span-2 rounded-2xl overflow-hidden cursor-pointer' style={{backgroundImage:"url('/map (1).png')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}}>
        <div className='bg-blue-600 min-w-max min-h-full bg-opacity-30 text-black font-semibold text-4xl flex items-center justify-center'>
        <Link href="/dash/docfinder"> <MdOutlineHealthAndSafety/>Health Centres Nearby
      </Link>
            </div>
        </div>
        <div className='col-span-1 row-span-1 bg-green-500 rounded-2xl flex items-center justify-center text-black font-semibold text-4xl'>
            <CgProfile/>Your Profile
        </div>
        <div className='col-span-1 row-span-1 overflow-hidden rounded-2xl ' style={{backgroundImage:"url('/records.png')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}}>
            <div className='bg-red-400 min-w-max min-h-full bg-opacity-30 text-black font-bold text-4xl flex items-center justify-center'>
                <GrDocumentText/>Medical Records
            </div>
        </div>
        <div className='col-span-2 row-span-1 bg-gray-700 opacity-70 rounded-2xl'></div>
        <div className='col-span-1 row-span-1 rounded-2xl bg-orange-300 flex items-center justify-center text-black font-semibold text-4xl'>
            <LuSettings/>Settings
        </div> 
      </div>
    </div>
    </div>
  );
}