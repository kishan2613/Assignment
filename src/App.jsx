
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'

//Assignment Task
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  )
}