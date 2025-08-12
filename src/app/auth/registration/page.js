'use client'
import React, { useState } from "react";
import Header from "@/app/Home/Header";
import '@/app/Globle.css'
import Link from "next/link";
import registrationhandle from "./HandleRegistration";

export default function About() {
  const [Notify, SetNotify] = useState({ success: false, massage: '' })
  const [userdata, setuserdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const HandleStateChange = (e) => {
    setuserdata({
      ...userdata,
      [e.target.name]: e.target.value
    });
  };
  const RegisterUser = async (e) => {
    e.preventDefault()
    if (userdata.password !== userdata.confirmPassword) {
      return
    }
    const result = await registrationhandle(userdata.name, userdata.email, userdata.password);
    if (result?.success == false) {
      SetNotify({ success: false, massage: result.message })
    }
    if (result?.success == true) {
      SetNotify({ success: true, massage: result.message })
    }
  }
  return (
    <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
        <Header />
        <div className="max-w-lg mx-auto px-6 py-16 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#1f2e55]">📝 Create Your Account</h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-md mx-auto">
            Sign up to access personalized AI-generated handwritten assignments anytime.
          </p>

          <form className="bg-white shadow-xl rounded-2xl p-8 flex flex-col space-y-5" onSubmit={RegisterUser}>
            <label className="text-sm font-semibold">Full Name</label>
            <input type="text" name="name" placeholder="Your full name" onChange={HandleStateChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3B82F6] outline-none" />

            <label className="text-sm font-semibold">Email Address</label>
            <input type="email" name="email" placeholder="your@email.com" onChange={HandleStateChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3B82F6] outline-none" />

            <label className="text-sm font-semibold">Password</label>
            <input type="password" name="password" placeholder="Create a password" onChange={HandleStateChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3B82F6] outline-none" />

            <label className="text-sm font-semibold">Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Re-enter your password" onChange={HandleStateChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3B82F6] outline-none" />
            {
              userdata.confirmPassword && userdata.password !== userdata.confirmPassword ? <p className="mt-[-20px] text-[15px] text-red-700">Password and confirmPassword Must be Same</p> : <></>
            }
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" required className="w-4 h-4" />
              <span>I agree to the <a href="#" className="text-[#3B82F6] hover:underline">Terms and Conditions</a></span>
            </div>
            {Notify.massage && (
              <p className={`${Notify.success==true?'text-green-700':'text-red-700'}`}>{Notify.massage}</p>
            )}

            <button type="submit" className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg py-3 mt-2 font-semibold hover:opacity-90 transition-all duration-300">Sign Up</button>
          </form>


          <p className="text-center text-gray-600 mt-6 text-sm">
            Already have an account? <Link href="/auth/login" className="text-[#3B82F6] font-semibold hover:underline">Login</Link>
          </p>
        </div>      </div>

    </div>
  );
}