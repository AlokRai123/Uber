import { useRef } from 'react'
import {useState} from 'react'
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchpanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [distination,setDistination] = useState('')
  const [panelOpen,setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const WaitingForDriverRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  useGSAP(function() {
       if(panelOpen){
        gsap.to(panelRef.current,{
          height: '70%',
          padding : 24
         })
         gsap.to(panelRef.current,{
          opacity:1
         })
       } else{
        gsap.to(panelRef.current,{
          height: '0%',
          padding : 0
        })
        gsap.to(panelCloseRef.current,{
          opacity:0
        })
       }
  },[panelOpen])

   useGSAP(function(){
     if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform : 'translateY(0)'
       })
     }else{
      gsap.to(vehiclePanelRef.current,{
        transform : 'translateY(100%)'
       })
     }
   },[vehiclePanel])



   useGSAP(function() {
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform : 'translateY(100%)'
      })
    }
   },[confirmRidePanel])

   useGSAP(function() {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(100%)'
      })
    }
   },[vehicleFound])

   useGSAP(function() {
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(WaitingForDriverRef.current,{
        transform : 'translateY(100%)'
      })
    }
   },[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden '>
      <img className=' w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {setPanelOpen(false)}} className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-2xl font-semibold'>Find a trip</h2>
         <form onSubmit={(e) => {submitHandler(e)}}>
            <div className="line absolute h-16  w-1 top-[47%] left-10  bg-gray-800 rounded-full"></div>
           <input 
           onClick={() => {setPanelOpen(true)}}
           value={pickup}
           onChange={(e) => {setPickup(e.target.value)}}
           className='bg-[#eee]  px-12 py-2 text-lg rounded-lg w-full mt-5' 
           type="text" 
           placeholder='Add a pick-up location' 
           />
           <input 
            onClick={() => {setPanelOpen(true)}}
           value={distination}
           onChange={(e) => {setDistination(e.target.value )}}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
            type="text"
             placeholder='Add a drop-off location'
              />
         </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
             <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>



              {/* here start confirmation of ride */}
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel}  setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
         <ConfirmRide setConfirmRidePanel={setConfirmRidePanel}  setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={WaitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>

      
       
    </div>
  )
}

export default Home
