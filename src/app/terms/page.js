import "../Globle.css";
import React from "react";
import Image from "next/image";

import Header from "../Home/Header";

export default function Terms() {
  return (
    <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
        <Header />
        <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center">📜 Terms and Conditions</h1>
          <p className="text-lg leading-relaxed mb-6">
            These Terms and Conditions govern your use of <strong>AssignmentAI</strong>. By accessing or using our website and services, you agree to comply with and be bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1️⃣ Acceptance of Terms</h2>
          <p className="text-lg leading-relaxed mb-6">
            By using AssignmentAI, you confirm that you are at least 13 years old and legally capable of entering into agreements. If you do not agree with these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2️⃣ Use of Services</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>✔️ You may use our handwriting generator only for lawful purposes.</li>
            <li>✔️ You agree not to misuse or attempt unauthorized access to our system.</li>
            <li>✔️ Generated content must not violate copyright, privacy, or any applicable laws.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3️⃣ User Accounts</h2>
          <p className="text-lg leading-relaxed mb-6">
            When creating an account, you agree to provide accurate information and keep your login details secure. AssignmentAI is not responsible for unauthorized account access caused by user negligence.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4️⃣ Payment & Refund Policy</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>✔️ All prices for paid services are clearly listed before purchase.</li>
            <li>✔️ Payments are processed securely via third-party payment gateways.</li>
            <li>✔️ <strong>No refunds will be issued</strong> once payment is successfully completed, except where required by applicable law.</li>
            <li>✔️ It is the user's responsibility to review the service details before making a payment.</li>
            <li>✔️ Any payment disputes must be reported to us in writing within 48 hours of the transaction.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">5️⃣ Data Handling</h2>
          <p className="text-lg leading-relaxed mb-6">
            We may collect and store personal data such as login information and text input to improve our services. This information is protected and kept secure. For more details, read our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6️⃣ Limitation of Liability</h2>
          <p className="text-lg leading-relaxed mb-6">
            AssignmentAI is not responsible for any damages, losses, or issues arising from the use or inability to use our services. The platform is provided on an "as is" basis without warranties of any kind.  
            Under no circumstances shall our liability exceed the amount paid by the user for the service in question.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7️⃣ Changes to Terms</h2>
          <p className="text-lg leading-relaxed mb-6">
            We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">📩 Contact Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            For any questions about these Terms and Conditions, please reach out to us at <strong>assignmentai.help@gmail.com</strong>.
          </p>

          <p className="mt-6 text-center text-gray-600">
            © 2023-2025 AssignmentAI – All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
