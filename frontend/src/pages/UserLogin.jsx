import { Link } from 'react-router-dom'
import {useState} from 'react'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})
  const submitHandler = (e) => {
     e.preventDefault();
     setuserData({
      email : email,
      password : password
    })
      console.log(userData)
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
       
         <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>

       </form>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#77a43f] flex items-center justify-center  mt-7 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
