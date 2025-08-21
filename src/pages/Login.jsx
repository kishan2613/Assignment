import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom"; 
import TextField from '@mui/material/TextField';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();   // ✅ useNavigate instead of context

  const formHandler = (e) => {
    e.preventDefault()
    // You could add validation here before navigation
    navigate('/profile')   // ✅ Correct way
  }

  return (
    <div className='h-screen flex justify-center'>
      <div className='h-full w-screen md:w-96 p-4 bg-[#F7F8F9] flex items-start border-2'>
        <form className='w-full' onSubmit={formHandler}>
          <div className='flex flex-col w-full mt-4'>
            <h1 className='text-3xl font-semibold'>Signin to your<br />PopX account</h1>
            <p className='pt-3 pb-4 text-[#74777B] font-medium'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>

          
      <Box
      sx={{ '& .MuiTextField-root': { m: 0.5, width: '40ch',marginTop:'20px' } }}
      noValidate
      autoComplete="off"
    >
      
        <TextField
          required
          id="outlined-required"
          label="Email Address"
          placeholder="Enter your email"
      
           sx={{
            '& lablel.MuiInputLabel-root': {
              color: '#6C25FF',
              fontWeight: 'bold',
             
            },
          }}
        />
        </Box>
            <Box
      sx={{ '& .MuiTextField-root': { m: 0.5, width: '40ch',marginTop:'20px' } }}
      noValidate
      autoComplete="off"
    >
      
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="Enter your password"
          type="password"
      
           sx={{
            '& lablel.MuiInputLabel-root': {
              color: '#6C25FF',
              fontWeight: 'bold',
             
            },
          }}
        />
        </Box>

            <button
              type="submit"
              className='p-2 mt-4 bg-[#CBCBCB] text-white rounded font-medium hover:bg-[#6e25ffcc]'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
