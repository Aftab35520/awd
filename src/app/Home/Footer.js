'use client'
import Image from "next/image";
import logo from '../asset/favicon.png'
import { useRouter } from "next/navigation";
import SubscriptionDashboardUI from "../comonents/Subscription";
import { useState } from "react";
import { useMyContext } from "../ContextApi/CreateContext";

 
export default function Footer() {
  const { subscribe, setsubscribe  } = useMyContext();
   const router = useRouter();
    return (
        <div className="z-[50] w-[100%] h-[300px] max-md:h-[500px] mt-3.5 bg-gradient-to-tr from-[#142440] via-[#1e2c50] to-[#0f1b33] relative overflow-hidden flex justify-center">
          {subscribe&&(<SubscriptionDashboardUI setSubscribe={setsubscribe} />)}
            {/* Soft glowing blob effect matching theme */}
            <div className="absolute top-[-30%] left-[-20%] w-[70vw] h-[70vw] 
        bg-gradient-to-br from-[#423FDC30] to-[#8B5CF630] 
        rounded-full blur-[140px] opacity-25"></div>

            <div className="absolute bottom-[-30%] right-[-20%] w-[65vw] h-[65vw] 
        bg-gradient-to-tr from-[#3B82F630] to-[#6366F130] 
        rounded-full blur-[120px] opacity-20"></div>

            {/* Footer Content Placeholder */}
         <div className="relative z-10 flex items-center justify-center h-full text-white bg-b w-[80%] max-w-[2000px] py-10 max-md:flex-col max-lg:items-start ">
  <div className="w-1/2 max-md:w-full">
    <Image src={logo} width={500} alt="logo" className="max-lg:w-[200px]"/>
    <p className="mt-3 text-lg font-light text-gray-300">
      Turning ideas into handwritten masterpieces
    </p>
    
  </div>
<div className="w-full border-b border-white mt-4 mb-12 hidden max-md:block"></div>
  <div className="w-1/2 max-md:w-full max-lg:text-[15px]">
  <div className="flex justify-end max-md:justify-between w-full  gap-20 mb-[40px] ">
    <div className="footer-links space-y-2 ">
      <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]" onClick={()=>router.push("/about")}>About</p>
      <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]" onClick={()=>router.push("/blogs")}>Blog</p>
      <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]" onClick={()=>router.push("/privacypolicy")}>Privacy Policy</p>
      <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]" onClick={()=>router.push("/terms")}>Terms of Service</p>
    </div>

    <div className="footer-links space-y-2">
       <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]" onClick={()=>window.location.assign("https://www.instagram.com/assignmentai1/")}>Instagram</p>
      {/* <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]">LinkedIn </p>
      <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]">Twitter / X</p> */}
            <p className="text-base font-medium cursor-pointer hover:text-[#6300fd] transition-colors duration-200 max-lg:text-[15px]" onClick={()=>router.push("/contact")}>Contact</p>
    </div>
    </div>
    <div className="w-full flex flex-col items-end max-md:items-start" >
      <p className="text-base font-medium cursor-pointer ">© 2023-2025 AssignmentAI. All Rights Reserved.</p>
    </div>
  </div>
  
</div>
        </div>
    );
}
