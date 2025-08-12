import Prompt from "./Prompt";
export default function Herro() {
  return (
    <div className="text-center text-white flex flex-col items-center p-2">
      <p className="pt-[200px] max-md:pt-[100px] text-4xl text-white/90 font-semibold text-shadow-2xs">
        Generate Realistic Handwritten
      </p>
      <p className="text-4xl text-white/90 font-semibold text-shadow-2xs">
        Assignments in Seconds
      </p>
      <p className="mt-3">
        {" "}
        Turn your typed text into realistic handwriting, or upload your own
        handwriting for a truly personalized experience.
      </p>
      <p>
        {" "}
        Completely free, with an optional premium feature for custom handwriting
        generation.
      </p>
      <Prompt/>
    </div>
  );
}
