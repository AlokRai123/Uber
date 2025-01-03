import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {
    const finishRidePanelRef = useRef(null)
    const [finishRidePanel, setfinishRidePanel] = useState(false)

    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform : 'translateY(0'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform : 'translateY(100%)'
          })
        }
      } ,[finishRidePanel])

  return (
    <div className='h-screen'>
     
    <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
      <img className=' w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <Link  className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
    <i className="text-lg font-bold ri-logout-box-r-line"></i>
    </Link>
    </div>

   <div className='h-4/5'>
   <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
   </div>
   
   
   <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10'
     onClick={() => {setfinishRidePanel(true)}}
   >
   <h5  className='p-1  text-center w-[90%] absolute top-0' onClick={() =>{}} ><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='bg-green-600 text-white font-semiBold p-3 px-10 rounded-lg'>Complete Ride</button>
   </div>

   <div ref={finishRidePanelRef}  className='fixed w-full z-10 translate-y-full bottom-0  bg-white px-3 py-10 pt-12'>
        <FinishRide setfinishRidePanel={setfinishRidePanel}/>
       </div>
   
  </div>
  )
}

export default CaptainRiding
