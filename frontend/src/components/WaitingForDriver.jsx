import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5  className='p-2  text-center w-[93%] absolute top-0' onClick={() =>{props.setWaitingForDriver(false)
      
    }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
     
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
          <i className="text-xl ri-map-pin-fill"></i>
       <div >
          <h3 className='text-lg font-medium'>562/14-A</h3>
          <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
       </div>
      </div>
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
  </div>
  )
}

export default WaitingForDriver
