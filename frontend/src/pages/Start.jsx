import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='h-screen bg-cover bg-bottom bg-[url(https://www.evanshalshaw.com/-/media/evanshalshaw/blog/traffic-light-rules-explained/cars-stopped-at-traffic-lights-1920x774px.ashx)] pt-8 w-full flex justify-between flex-col bg-red-400'>
        <img className=' w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
              <h2 className="text-3xl font-bold">Get Startrd with uber</h2>
              <Link to={'/login'} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
            </div>
      </div>
    </div>
  )
}

export default Start
