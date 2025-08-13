import Home from "./Home";
import Gradient from "./Home/Gradient";

export default function page() {
  return(
    <div className="w-full flex  flex-col  items-center justify-between relative overflow-x-hidden">
      <Home/>
      <Gradient/>
    </div>
  )
}