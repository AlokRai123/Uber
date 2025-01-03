import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://img.freepik.com/premium-photo/beautiful-little-girl-cute-chinese-random-climate_943281-59917.jpg" alt="" />
          <h4 className='text-lg font-medium'>Alok Rai</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>₹293.5</h4>
          <p className='text-sm text-gray-600'>Earned</p>
        </div>
       </div>

       <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-between  gap-5 items-start'>
           <div className=' text-center'>
                <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                <h5 className='text-lg font-medium'>12.5</h5>
                 <p className='text-sm text-gray-600'>Hours</p>
            </div>
           <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
                <h5 className='text-lg font-medium'>12.5</h5>
                 <p className='text-sm text-gray-600'>Hours</p>
             </div>
           <div className=' text-center'>
                <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                <h5 className='text-lg font-medium'>12.5</h5>
                 <p className='text-sm text-gray-600'>Hours</p>
            </div>
       </div>
    </div>
  )
}

export default CaptainDetails
