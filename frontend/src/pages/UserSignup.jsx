import { useState} from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

const [email, setEmail] = useState('')
const [password, setpassword] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [userData, setuserData] = useState({})
 
  const submitHandler = (e) => {
     e.preventDefault();
     console.log(userData);

     setuserData({
      fullName : {
        firstName : firstName,
        lastName : lastName
      },
      
      email : email,
      password : password,
     })

     setEmail('')
     setFirstName('')
     setLastName('')
     setpassword('')
     
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
        <img className=' w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}> 

         <h3 className='text-base mb-2 font-medium'>What is your name</h3>
         <div className='flex gap-3'>

         <input
         required 
         value={firstName}
         onChange={(e) => {setFirstName(e.target.value)}} 
         className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
         type="text" 
         placeholder='first name' 
        
         />

         <input
         required 
         value={lastName}
         onChange={(e) => {setLastName(e.target.value)}}
         className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
         type="text" 
         placeholder='last name'  
         />

      </div>
      
        <h3 className='text-base mb-2 font-medium'>What is your email</h3>
        <input
         required 
         value={email}
         onChange={(e) => {setEmail(e.target.value)}}
         className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         type="email" 
         placeholder='example@gmail.com'  
         />


        <h3 className='text-base mb-2 font-medium'>Enter password</h3>
        <input 
        required 
        value={password}
        onChange={(e) => {setpassword(e.target.value)}}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder='password' 
        />
        <button className='bg-[#111] mt-7 text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
     
       <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>

     </form>
    </div>
    <div>
     <p className='text-xs'>This site is protexted by reCAPTCHA and the Google <span className='underline'> Privacy Police</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
  </div>
  )
}

export default UserSignup
