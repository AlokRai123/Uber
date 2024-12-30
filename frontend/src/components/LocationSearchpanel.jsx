import React from 'react'

const LocationSearchPanel = (props) => { 

const location = [
  "C-152 Super tech craz Omnicrome 1 Gautam Budh nagar Greater Noida",
  "C-1 Super near malhotra cafe Omnicrome 3 Gautam Budh nagar Greater Noida",
  "D-15 Super near sharma cafe Omnicrome 2 Gautam Budh nagar Greater Noida",
  "C-1 Super near Atti cafe Omnicrome 1 Gautam Budh nagar Greater Noida",
]

  return (
    <div>

     {/* this is just a sample data */}
     {
     location.map(function(elem, index){
        return <div key={index} onClick={() =>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex gap-4 rounded-xl border-2 active:border-black p-3 items-center my-4 justify-start'>
        <h2 className='bg-[#eee] h-10 flex items-center justify-centre w-16 rounded-full'><i className="ri-map-pin-user-fill"></i></h2>
        <h4 className='font-medium'>{elem}</h4>
       </div>
     })
     }
     
     
    </div>
  )
}

export default LocationSearchPanel
