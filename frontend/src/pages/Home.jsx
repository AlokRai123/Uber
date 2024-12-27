import { useRef } from 'react'
import {useState} from 'react'
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchpanel';

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [distination,setDistination] = useState('')
  const [panelOpen,setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
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
            <div className="line absolute h-16  w-1 top-[35%] left-10  bg-gray-800 rounded-full"></div>
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
             <LocationSearchPanel/>
        </div>
      </div>

      <div className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
           <div className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹192.8</h2>
           </div>
           <div className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>6</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹222.8</h2>
           </div>
           <div className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹100.8</h2>
           </div>
           <div className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>Uberbike <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹82.8</h2>
           </div>
      </div>
       
    </div>
  )
}

export default Home
