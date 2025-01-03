import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
    }

  return (
    <div >
    <h5  className='p-2  text-center w-[93%] absolute top-0' onClick={() =>{props.setConfirmRidePanel(false)}} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
    <h3 className='text-2xl font-semibold mb-2'>Confirm to this ride to start</h3>

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
    <div className='mt-6 w-full'>
       <form onSubmit={(e) => {submitHandler(e)}}>

       <input value={otp} onChange={(e)=>{setOtp(e.target.value)}} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 ' placeholder='Enter OTP' />

       <Link to={'/captain-riding'} className=' w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg'> Confirm</Link>

           <button onClick={() => {
            props.setConfirmRidePanel(false)
            props.setRidePopupPanel(false)
            }} className='w-full mt-1 text-lg bg-red-600 text-white font-semibold p-2 rounded-lg'>Cancel</button>
       </form>
    </div>
    </div>
  </div>
  )
}

export default ConfirmRidePopUp
