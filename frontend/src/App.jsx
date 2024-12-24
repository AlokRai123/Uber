import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'

function App() {
  

  return (
   <div>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/login' element={<UserLogin/>}/>
      <Route path ='/signup' element={<UserSignup/>}/>
      <Route path ='/captain-login' element={<CaptainLogin/>}/>
      <Route path ='/captain-signup' element={<CaptainSignup/>}/>
    </Routes>
   </div>
  )
}

export default App
