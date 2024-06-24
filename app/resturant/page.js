"use client"

import React, { useState } from 'react'
import Login from "@/app/_components/Login";
import SignUp from "@/app/_components/SignUp";
import Header from '../_components/Header';
import Footer from '../_components/Footer';
 
const page = () => {
    const [signIn, setSignIn] = useState(true)  
  return (
    <div className='flex flex-col h-screen justify-between' > 
    <Header />
    <div className='flex flex-col justify-center items-center'>
         {
            signIn? <Login /> : <SignUp />
         }
         
         <a className='my-5 cursor-pointer' onClick={()=> setSignIn(!signIn)}>
           {
            signIn? "Do not have account? Sign Up" : "Already have account Login"
           } 
         </a>
    </div>
    <Footer className="h-10" />
    </div>
  )
}

export default page