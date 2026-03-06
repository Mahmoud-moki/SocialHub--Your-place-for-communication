import React, { useContext, useState } from 'react'
import { IconLock } from '@tabler/icons-react';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { IconBrandFacebookFilled } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Layout from './../layout/Layout'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import { Link , useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

// import Alert from './../sweetalert/sweatalert.jsx'

export default function Login() {

  //  const [SuccessResponse, setSuccessResponse] = useState(false)

  const { handleSubmit, register, formState } = useForm({

    mode: 'onSubmit'
  });

  const navigate = useNavigate()

  const { setUserAuthToken } = useContext(AuthContext)
  

  function MyHandleForm(Values) {
    console.log('Submitting', Values)
    axios.post('https://route-posts.routemisr.com/users/signin', Values)
      .then(function (resp) {
        console.log(resp.data.token);
        // setSuccessResponse(true)
        swal("Log in Successful", "", "success");
        navigate('/home');
        // const userToken = resp.data.token;
        setUserAuthToken(resp.data.token);
        localStorage.setItem('token',resp.data.data.token)
        // console.log('token' , resp.data.data.token );
        
      }).catch(function (error) {
        // console.log('errooooooor', error);
        swal("Failed to log in", "", "error");
      })
  }

  // console.log(formState.errors);



  return (
    <>
      <div className='grid lg:grid-cols-2 min-w-full'>
        <Layout />
        <div className='class="login-form bg-gray-100 py-12 min-h-screen flex justify-center items-center"'>
          <div className="bg-white text-gray-500 w-140 h-fit align-middle  mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>
            <p className="text-center mt-4">Don’t have an account? <Link to="/Signup" className="text-blue-500 underline">Signup</Link></p>
            <div className='flex gap-2'>
              <button type="button" className="w-65 cursor-pointer flex items-center gap-2 justify-center mt-5 bg-white border border-gray-500/30 py-2.5 rounded-2xl text-gray-800">
                <IconBrandGoogleFilled color='red' />
                Google
              </button>
              <button type="button" className="w-65 cursor-pointer flex items-center gap-2 justify-center mt-5 bg-blue-700 py-2.5 rounded-2xl text-white">
                <IconBrandFacebookFilled />
                Facebook
              </button>
            </div>
            <div className="mt-3 text-gray-400 text-sm relative text-center after:w-1/3 after:h-px after:bg-linear-to-r after:from-transparent after:via-gray-400/40 after:to-transparent after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 before:w-1/3 before:h-px before:bg-linear-to-r before:from-transparent before:via-gray-400/40 before:to-transparent before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 undefined">or continue with email</div>
            <form onSubmit={handleSubmit(MyHandleForm)}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-1 text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <IconMail stroke={2} size={20} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    className='w-full pl-10 pr-3 py-2 border rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 '
                    {...register('email',
                      {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address',
                        }
                      }
                    )}
                  />
                  {formState.errors.email && formState.touchedFields.email && <p className='text-red-600'>{formState.errors.email?.message}</p>}
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <IconLock stroke={2} size={20} />

                </div>
                <input
                  id="password"
                  className="w-full pl-10 pr-3 py-2 border rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                  type="password"
                  placeholder="Enter Your password"

                  {...register('password', {
                    required: 'Please Enter your Password',
                    pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, message: "Password is wrong" }
                  },)}
                />
                {formState.errors.password && formState.touchedFields.password && <p className='text-red-600'>{formState.errors.password?.message}</p>}
              </div>
              <button type="submit" className="w-full py-3 mt-3 bg-linear-to-r from-blue-600 to-blue-400 border-none text-white font-bold rounded-2xl flex items-center justify-center gap-2">Sign In<IconArrowNarrowRight stroke={2} /> </button>
            </form>
          </div>
          </div>
      </div>
    </>
  )
}
