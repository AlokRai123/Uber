import {useState} from 'react'
import { Link } from 'react-router-dom'


const CaptainLogin = () => {

 const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [captainData, setCaptainData] = useState({})
  const submitHandler = (e) => {
     e.preventDefault();
     setCaptainData({
      email : email,
      password : password
    })
     setEmail('')
     setpassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className=' w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
     <form onSubmit={(e) => submitHandler(e)}> 
        <h3 className='text-xl mb-2 font-medium'>What is your email</h3>
        <input
         required 
         value={email}
         onChange={(e) => {setEmail(e.target.value)}}
         className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         type="email" 
         placeholder='example@gmail.com'  
         />
        <h3 className='text-xl mb-2 font-medium'>Enter password</h3>
        <input 
        required 
        value={password}
        onChange={(e) => {setpassword(e.target.value)}}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder='password' 
        />
        <button className='bg-[#111] mt-7 text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
     
       <p className='text-center'>Join a fleet? <Link to='/Captain-signup' className='text-blue-600'>Register as a Captain</Link></p>

     </form>
    </div>
    <div>
      <Link to='/login' className='bg-[#e36e07] flex items-center justify-center  mt-7 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as user</Link>
    </div>
  </div>
  )
}

export default CaptainLogin
