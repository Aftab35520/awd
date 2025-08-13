import RazorpayBotton from "./RazorpayBotton";

export default function SubscriptionDashboardUI({setSubscribe}) {
  return (
    <>
      {/* Overlay with blur and translucent black */}
      <div className="fixed inset-0  bg-opacity-20 backdrop-blur-md z-[90]"></div>

      {/* Modal container */}
      <div className="fixed top-1/2 left-1/2 z-[91] max-w-md w-full max-md:w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-600 p-6 md:p-8 text-white shadow-lg font-sans overflow-auto max-h-[90vh]">

        {/* Close button */}
        <button
        onClick={()=>{setSubscribe(false)}}
          aria-label="Close"
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl md:text-3xl font-bold p-2"
        >
          &times;
        </button>

        <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">
          Unlock Custom Fonts & Creativity!
        </h1>

        <div className="p-4 bg-indigo-900 bg-opacity-40 rounded-lg text-center space-y-4 text-sm md:text-base">
          <h2 className="text-lg md:text-2xl font-semibold">Upgrade to Premium</h2>
          <p className="leading-relaxed">
            Receive 2 additional credits to generate customizable handwriting, plus 24/7 dedicated support.
          </p>
          <p>Your custom handwriting font is ready for download.</p>
          <p className="text-2xl md:text-3xl font-bold">₹49 (One-Time Payment)</p>
          <RazorpayBotton/>
        </div>

        <div className="mt-8 border-t border-white border-opacity-20 pt-6 text-center text-xs md:text-base">
          <h3 className="text-lg md:text-xl font-semibold mb-2">24/7 Support</h3>
          <p>We are here for you anytime. Reach out via email or chat.</p>
          <a
            href="mailto:assignmentai.help@gmail.com"
            className="text-indigo-300 hover:underline break-all"
          >
            assignmentai.help@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
