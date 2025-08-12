'use client'
import "../Globle.css";
import React, { useState } from "react";
import Header from "../Home/Header";
import linkedin from '../asset/linkedin.png'
import instagram from '../asset/instagram.png'
import twitter from '../asset/twitter.png'
import Image from "next/image";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [MassageAlert,setMessageAlert]=useState("")
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j9cp1sb",   // Replace with your Service ID
        "template_ug751wg",  // Replace with your Template ID
        form.current,
        "l13kRCEBNIZhrdODZ"    // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageAlert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessageAlert("❌ Failed to send message. Try again.");
        }
      );
  };
 
  return (
  <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
        <Header/>
  <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#1f2e55]">📬 Get in Touch with AssignmentAI</h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Have questions, feedback, or need assistance? Our team is here to help you. Fill out the form below or reach us directly via email.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white shadow-lg rounded-2xl p-8 flex flex-col space-y-4"
    >
      <label className="text-sm font-semibold">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your full name"
        required
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3B82F6] outline-none"
      />

      <label className="text-sm font-semibold">Email</label>
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3B82F6] outline-none"
      />

      <label className="text-sm font-semibold">Message</label>
      <textarea
        rows="4"
        name="message"
        placeholder="Write your message here..."
        required
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3B82F6] outline-none"
      ></textarea>

      <button
        type="submit"
        className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg py-3 mt-2 font-semibold hover:opacity-90 transition-all duration-300"
      >
        Send Message
      </button>
      <p className={`${MassageAlert=="✅ Message sent successfully!"?'text-green-700':MassageAlert=="❌ Failed to send message. Try again."?'text-green-700':'hidden'} cursor-pointer`} onClick={()=>setMessageAlert("")}>{MassageAlert}</p>
    </form>

        {/* Contact Info Card */}
        <div className="bg-gradient-to-tr from-[#142440] via-[#1f2e55] to-[#0f1b33] text-white rounded-2xl p-8 flex flex-col justify-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">📞 Contact Information</h2>
          <p className="mb-3">Our support team will assist you with your queries and ensure the best experience on AssignmentAI.</p>

          <div className="space-y-3 mt-4">
           <p><strong>Powered By:</strong> AssignmentAI</p>
            <p><strong>Follow Us:</strong> </p>

          </div>

          <div className="flex space-x-4 mt-6">
            <a href="https://www.instagram.com/assignmentai1/" className="hover:scale-110 transition-transform duration-300"><Image src={twitter} alt="Twitter"width={30} height="30" /></a>
            <a href="https://www.instagram.com/assignmentai1/" className="hover:scale-110 transition-transform duration-300"><Image src={linkedin} alt="LinkedIn" width="30" /></a>
            <a href="https://www.instagram.com/assignmentai1/" className="hover:scale-110 transition-transform duration-300"><Image src={instagram} alt="Instagram" width="30" /></a>
          </div>
        </div>
      </div>
    </div>
      </div>

    </div>
  );
}