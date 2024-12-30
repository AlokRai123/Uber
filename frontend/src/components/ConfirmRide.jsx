import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5  className='p-3  text-center w-[93%] absolute top-0' onClick={() =>{props.setVehiclePanel(false)}} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

      <div>
        <img src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="" />
      <div>
      </div>
        <button className=''> Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide
