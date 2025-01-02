import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    
   <div className='h-screen'>
     
     <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
     <i className="text-lg font-bold ri-home-7-line"></i>
     </Link>

    <div className='h-1/2'>
    <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
    </div>
    <div className='h-1/2 p-4'>
    <div className='flex items-center justify-between'>
    <img className='h-12' src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="" />
    <div className='text-right'>
      <h2 className='text-lg font-medium'>Alok</h2>
      <h4 className='text-xl font-semibold -mt-2 -mb-1'>MP04 AB 1234</h4>
      <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
    </div>
   </div>

    <div className='flex text-xl gap-2 justify-between flex-col items-center'>
    <div className='w-full mt-5'>
      
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className="ri-map-pin-user-fill"></i>
       <div >
          <h3 className='text-lg font-medium'>562/14-A</h3>
          <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
       </div>
      </div>
      <div className='flex items-center gap-5 p-3'>
           <i className="text-xl ri-currency-line"></i>
       <div >
          <h3 className='text-lg font-medium'>₹193.8</h3>
          <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
       </div>
      </div>
    </div>
      
    </div>
          <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
    </div>
   </div>
  )
}

export default Riding
