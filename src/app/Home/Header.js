'use client'
import Image from "next/image"
import logo from "../asset/favicon.png"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useMyContext } from "../ContextApi/CreateContext";
export default function Header() {
  const pathname = usePathname();
  const router = useRouter()
  const [user, setuser] = useState(null)
  const { setsubscribe } = useMyContext();
  const [ispaid, setispaid] = useState(false)
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setuser(JSON.parse(userData));
      setispaid(JSON.parse(userData).isPaid)
    }
    else {
      setuser(null)
    }
  }, [])
  console.log(user)
  return (
    <div className={`w-[100%] flex justify-center  pt-2 pb-2 ${pathname != "/" && pathname != '/dashboard' ? "bg-[#1b284e]" : ''}`} >
      <div className="w-[80%] flex justify-between items-center pl-2 pr-2 max-sm:w-[90%]">
        <Image src={logo} alt="" className="w-[200px] cursor-pointer max-sm:w-[150px]" onClick={() => router.push("/")} />
        <div className="flex  justify-center items-center ">
          {
            (!ispaid && (
              <button
                onClick={() => setsubscribe(true)}
                className="flex items-center gap-2 mr-2  bg-yellow-400 text-yellow-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition text-sm md:text-base"
              >
                {/* Example SVG, replace with Kingtaj SVG if you have it */}
                <svg
                  xmlns="http://www.w3.org/23000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
                </svg>
                Subscribe
              </button>
            ))
          }


          {
            user ? (
              <div
                onClick={() => router.push("/dashboard")}
                className="flex items-center gap-2 pt-2 pb-2 cursor-pointer text-white max-lg:text-[15px] transition-colors duration-200 hover:text-[#6300fd] select-none bg-gradient-to-r from-purple-700 to-indigo-600 rounded px-3 py-1"
                title="Go to Dashboard"
              >
                <FaUserCircle className="w-5 h-5 text-white" />
                <span className="font-medium text-base max-lg:text-[15px]">{user.name}</span>
              </div>

            ) : (
              <div
                onClick={() => router.push("/auth/login")}
                className="flex items-center gap-2 pt-2 pb-2 cursor-pointer text-white max-lg:text-[15px] transition-colors duration-200 hover:text-[#6300fd] select-none bg-gradient-to-r from-purple-700 to-indigo-600 rounded px-3 py-1"
                title="Go to Dashboard"
              >
                <FaUserCircle className="w-5 h-5 text-white" />
                <span className="font-medium text-base max-lg:text-[15px]">Login</span>
              </div>
            )
          }
        </div>

      </div>
    </div>
  )
}
