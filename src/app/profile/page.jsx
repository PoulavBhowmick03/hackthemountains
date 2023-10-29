import React from 'react'
import {CgProfile} from 'react-icons/cg'

export default function profile() {
  return (
    <div className='px-16 py-8'>
      <div className='font-semibold text-gray-300 pb-16 flex items-center text-5xl'>
          <CgProfile/> <div className='text-4xl ml-2'>User Profile</div>
        </div>
       <div className='mx-80 min-w-max text-xl'>
       <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Name:</div>
          <div>Binayak</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Age:</div>
          <div>19</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Sex:</div>
          <div>Male</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Email:</div>
          <div>binayak@nigger.com</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Phone No.:</div>
          <div>1234567890</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Blood Group:</div>
          <div>B+</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Allergy:</div>
          <div>Nil</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Adhar:</div>
          <div>1234-1234-1234</div>
        </div>
        <div className='flex justify-between mb-5 border-b-2 border-white rounded lg'>
          <div>Age:</div>
          <div>19</div>
        </div>
       </div>
    </div>
  )
}
