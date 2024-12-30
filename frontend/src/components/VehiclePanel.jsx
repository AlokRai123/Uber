import React from 'react'


const VehiclePanel = (props) => {
  return (
    <div>
      <h5  className='p-3  text-center w-[93%] absolute top-0' onClick={() =>{props.setVehiclePanel(false)}} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
           <div onClick={() =>{props.setConfirmRidePanel(true)}} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹192.8</h2>
           </div>
           <div onClick={() =>{props.setConfirmRidePanel(true)}} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>6</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹222.8</h2>
           </div>
           <div onClick={() =>{props.setConfirmRidePanel(true)}} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹100.8</h2>
           </div>
           <div onClick={() =>{props.setConfirmRidePanel(true)}} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-20 bg-white' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car-img" />
            <div>
              <h4 className='font-medium text-base'>Uberbike <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>₹82.8</h2>
           </div>
    </div>
  )
}

export default VehiclePanel
