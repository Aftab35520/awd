import "../Globle.css";
import React from "react";
import Image from "next/image";

import Header from "../Home/Header";


export default function Policy() {
 
  return (
  <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
        <Header/>
     <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">🔒 Privacy Policy</h1>
      <p className="text-lg leading-relaxed mb-6">
        This Privacy Policy explains how <strong>AssignmentAI</strong> collects, uses, and protects your personal information while using our website and services. We respect your privacy and are committed to safeguarding your data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">📌 Information We Collect</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>✔️ Personal details provided during registration (name, email address, and contact information).</li>
        <li>✔️ Login information (hidden & securely stored) to ensure account safety.</li>
        <li>✔️ Usage data, such as pages visited, actions taken, and time spent on our site, to improve user experience.</li>
        <li>✔️ Uploaded text or content you input to generate handwritten assignments (this data is processed securely and deleted periodically).</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">🔐 How We Use Your Data</h2>
      <p className="text-lg leading-relaxed mb-6">
        We use collected information to:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>✔️ Provide and improve our AI handwriting generation services.</li>
        <li>✔️ Personalize your experience and ensure smooth functioning of the website.</li>
        <li>✔️ Communicate important updates, offers, and support messages.</li>
        <li>✔️ Maintain account security and prevent unauthorized access.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">🛡️ Data Security</h2>
      <p className="text-lg leading-relaxed mb-6">
        We implement advanced encryption, hidden storage protocols, and regular security audits to protect your personal data and login details from unauthorized access or misuse.
      </p>

      <h2 className="text-2xl font-semibold mb-4">🤝 Your Consent</h2>
      <p className="text-lg leading-relaxed mb-6">
        By using our website, you consent to the collection and use of information as described in this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">📩 Contact Us</h2>
      <p className="text-lg leading-relaxed mb-6">
        If you have questions about our Privacy Policy or data handling practices, please contact us at <strong>assignmentai.help@gmail.com</strong>.
      </p>

      <p className="mt-6 text-center text-gray-600">© 2023-2025 AssignmentAI – Your privacy and data security are our top priorities.</p>
    </div>
      </div>

    </div>
  );
}