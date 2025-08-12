'use client'
import Link from "next/link";
import {  usePathname,useRouter } from "next/navigation";
export default function DashboardHeader( {routes,setroutes}) {
   const pathname = usePathname();
   const router=useRouter()
  console.log(routes)
  return (
   <div className={`w-[100%] flex justify-center  pt-2 pb-2`} >
     <div className="w-[80%] flex justify-center items-center pl-2 pr-2 max-sm:w-[90%] ">
        <Link href="/dashboard" className="bg-[#6c00fc] text-white rounded-xl p-2 m-2" onClick={()=>setroutes('generatefont')}>Generate Font</Link>
       <Link href="/dashboard" className="bg-[#6c00fc] text-white rounded-xl p-2 m-2" onClick={()=>setroutes('generateassignmentai')}>Generate AssignmentAI</Link>
       <Link href="/dashboard" className="bg-[#f7bf08] text-white rounded-xl p-2 m-2" onClick={()=>setroutes('subscription')}>Subscription</Link>
       <Link href="/dashboard" className="bg-[#a53f3f] text-white rounded-xl p-2 m-2" onClick={()=>{localStorage.removeItem('user'),localStorage.removeItem('Id'),window.location.assign("/")}}>Logout</Link>
    </div>
   </div>
  )
}
