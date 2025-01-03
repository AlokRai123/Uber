import React from 'react'

const RidePopUp = () => {
  return (
    <div>
    <h5  className='p-2  text-center w-[93%] absolute top-0' onClick={() =>{props.setConfirmRidePanel(false)}} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
    <h3 className='text-2xl font-semibold mb-2'>New Ride Available!</h3>

    <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg mt-4'>
        <div className='flex items-center gap-3 '>
        <img className='w-12 h-12 rounded-full object-cover ' src="https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg" alt="" />
        <h2 className='text-xl font-medium'>Aadesh Attri</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.5KM</h5>
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
      <button onClick={() => {props.setVehicleFound(true)
      props.setConfirmRidePanel(false)
      }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'> Confirm</button>

<button onClick={() => {
      }} className='w-full mt-1 bg-gray-300 text-white font-semibold p-2 rounded-lg'> Ignore</button>
    </div>
  </div>
  )
}

export default RidePopUp
