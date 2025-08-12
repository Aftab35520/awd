import "../Globle.css";
import React from "react";
import Image from "next/image";

import Header from "../Home/Header";


export default function About() {
 
  return (
  <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
        <Header/>
   <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">📖 About AssignmentAI</h1>
      <p className="text-lg leading-relaxed mb-6">
        <strong>AssignmentAI</strong> is an advanced AI-powered handwriting generator designed to make your digital text look like genuine handwritten content. We understand that handwritten notes and assignments have a personal, authentic touch that typed text often lacks. Our goal is to bridge that gap by combining artificial intelligence with realistic handwriting styles.
      </p>

      <h2 className="text-2xl font-semibold mb-4">✨ Our Mission</h2>
      <p className="text-lg leading-relaxed mb-6">
        At AssignmentAI, our mission is to help students, educators, and creators transform their typed assignments, notes, and projects into visually appealing handwritten documents in just seconds. We believe creativity should never be limited by time or effort, and our AI ensures you can have both efficiency and authenticity.
      </p>

      <h2 className="text-2xl font-semibold mb-4">🔑 Key Features</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>✔️ Multiple handwriting styles to choose from.</li>
        <li>✔️ Realistic stroke patterns for a natural, human-like look.</li>
        <li>✔️ Fast, easy, and accessible to everyone.</li>
        <li>✔️ Perfect for assignments, personal notes, and creative projects.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">💡 Why Use AssignmentAI?</h2>
      <p className="text-lg leading-relaxed mb-6">
        Whether you're running out of time to handwrite your project, need a neat and readable version of your notes, or just love the aesthetics of handwriting, AssignmentAI has got you covered. We make it easy to generate authentic-looking handwritten pages quickly and effortlessly.
      </p>

      <h2 className="text-2xl font-semibold mb-4">🎨 Designed By</h2>
      <p className="text-lg leading-relaxed mb-6">
        AssignmentAI was designed and developed by <strong>Aftab Alam</strong>, a passionate innovator in the field of AI-driven creativity tools. With a vision to make handwritten-style content more accessible, Aftab brings technology and artistry together to simplify the process of creating authentic-looking handwritten assignments.
      </p>

      <p className="mt-6 text-center text-gray-600">© 2023-2025 AssignmentAI – Making your ideas look handwritten, instantly.</p>
    </div>
      </div>

    </div>
  );
}