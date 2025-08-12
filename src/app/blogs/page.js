import "../Globle.css";
import React from "react";
import Image from "next/image";
import handwriting1 from "../asset/Note1.png";
import handwriting2 from "../asset/Note2.png";
import Header from "../Home/Header";


export default function BlogAssignmentAI() {
 
  return (
  <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
        <Header/>
        <div className="w-[80%] mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">✍️ Welcome to AssignmentAI: Turning Ideas into Handwritten Masterpieces</h1>
      <p className="text-lg leading-relaxed mb-6">
        At <strong>AssignmentAI</strong>, we bring back the charm of real handwriting while keeping the convenience of modern AI tools. Whether you need handwritten assignments, notes, or creative scripts, our platform transforms your typed text into realistic, human-like handwriting effortlessly.
      </p>

      <h2 className="text-2xl font-semibold mb-4">📌 Why Choose AssignmentAI?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>✔️ <strong>Realistic Handwriting Styles</strong> – Our AI mimics authentic handwriting patterns for a natural look.</li>
        <li>✔️ <strong>Time-Saving</strong> – Generate entire handwritten pages in seconds.</li>
        <li>✔️ <strong>Customizable</strong> – Choose from various handwriting styles and page formats.</li>
        <li>✔️ <strong>Perfect for Students & Creators</strong> – Make assignments, notes, and projects visually appealing.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">🖊️ See the Magic in Action</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <Image src={handwriting1} alt="AI-generated handwriting example 1" className="rounded-lg shadow-md" />
        </div>
        <div>
          <Image src={handwriting2} alt="AI-generated handwriting example 2" className="rounded-lg shadow-md" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">🚀 How It Works</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>Type or paste your text into our generator.</li>
        <li>Select your preferred handwriting style.</li>
        <li>Generate and download your handwritten pages instantly.</li>
      </ol>

      <p className="text-lg leading-relaxed">
        AssignmentAI is perfect for students, teachers, and content creators who want that personal handwritten touch on their work. Our goal is simple – make your assignments look authentic and impressive without the extra effort.
      </p>

      <p className="mt-6 text-center text-gray-600">© 2023-2025 AssignmentAI – Bringing handwritten charm back to digital text.</p>
    </div>
      </div>

    </div>
  );
}