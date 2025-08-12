'use client'
import React, { useState } from "react";
import Header from "@/app/Home/Header";
import '@/app/Globle.css'
import Link from "next/link";
import Loginhandle from "./HandleLogin";

export default function About() {
    const [UserLogin,SetUserLogin]=useState({email:"",password:''})
    const HandleUserInput=(e)=>{
      SetUserLogin({...UserLogin,[e.target.name]:e.target.value})
    }
    const [NotifyActiveUser,SerActiveUser]=useState({status:false,message:'',user:{}})
  
    const Login = async (e) => {
    e.preventDefault()
    if(!UserLogin.email || !UserLogin.password){
      return
    }
    const result = await Loginhandle({email:UserLogin.email,password:UserLogin.password});
    if(result?.status==false){
      SerActiveUser({status:false,message:result.message,user:{}})
    }
    if(result?.status==true){
      SerActiveUser({status:true,message:result.message,user:result.user})
      localStorage.setItem('user', JSON.stringify(result.user));
      window.location.href = '/dashboard'; // Redirect to home page after successful login
    }
  }
 
  return (
  <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
             <Header/>
            <div className="max-w-lg mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#1f2e55]">🔑 Login to AssignmentAI</h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-md mx-auto">
        Access your personalized dashboard and manage your handwritten assignments effortlessly.
      </p>

      <form className="bg-white shadow-xl rounded-2xl p-8 flex flex-col space-y-5" onSubmit={Login}>
        <label className="text-sm font-semibold">Email Address</label>
        <input type="email" placeholder="your@email.com" name="email" onChange={HandleUserInput} required className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3B82F6] outline-none" />

        <label className="text-sm font-semibold">Password</label>
        <input type="password" placeholder="Enter your password" name="password" onChange={HandleUserInput} required className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3B82F6] outline-none" />

        <div className="flex justify-between items-center text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" required/>
            <span>Remember me</span>
          </label>
          <a href="#" className="text-[#3B82F6] hover:underline">Forgot password?</a>
        </div>

        <button type="submit" className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg py-3 mt-2 font-semibold hover:opacity-90 transition-all duration-300">Login</button>
      {
        NotifyActiveUser?.message&&(
          <p className={`${NotifyActiveUser.status==false?"text-red-700":'text-green-600'}`}>{NotifyActiveUser.message}</p>
        )
      }
      </form>

      <p className="text-center text-gray-600 mt-6 text-sm">
        Don't have an account? <Link href="/auth/registration" className="text-[#3B82F6] font-semibold hover:underline">Sign up</Link>
      </p>
    </div>
      </div>

    </div>
  );
}