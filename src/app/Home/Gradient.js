export default function Gradient() {
  return (
    <div >
      {/* Dark solid background fallback */}
      <div className="fixed inset-0 bg-[#0F0F1C] -z-20"></div>

      {/* Top-left soft blob */}
      <div className="fixed top-[-30%] left-[-25%] w-[100vw] h-[100vw] bg-gradient-to-br from-[#423FDC] to-[#8B5CF6] rounded-full blur-[120px] opacity-30 -z-10"></div>

      {/* Bottom-right soft blob */}
      <div className="fixed bottom-[-30%] right-[-25%] w-[90vw] h-[90vw] bg-gradient-to-tr from-[#3B82F6] to-[#6366F1] rounded-full blur-[100px] opacity-20 -z-10"></div>
    </div>
  );
}
