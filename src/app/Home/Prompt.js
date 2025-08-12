"use client";
import Image from "next/image";
import { useState } from "react";
import pdfToText from "react-pdftotext";
import pngwing from "../asset/awd.png";
import image from "../asset/download.png";
import Pdf from "../asset/Pdf.png";
import Plus from "../asset/Plus.png";
import LiveUrl from "../comonents/Url";
import { useMyContext } from "../ContextApi/CreateContext";
import CircularProgressWithLabel from "./ProgressBar";
import { GoogleGenerativeAI } from "@google/generative-ai";
export default function Prompt() {
  const { setAnswer } = useMyContext();
  const [question, setQuestion] = useState("");
  const [file, setfile] = useState(null);
  const [message, setMessage] = useState(false);
  const [pdfText, setPdfText] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI("AIzaSyCDDIXRidwq9ootdag1hzSgvKySXQYNMhQ");
  const extractText = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setProgress(0);

    // Simulate progress while extracting
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // wait for real completion
        return prev + 5;
      });
    }, 100);

    pdfToText(file)
      .then((extractedText) => {
        setPdfText(extractedText);
        setProgress(100); // jump to 100 on completion
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to extract text from PDF:", err);
        setLoading(false);
      })
      .finally(() => clearInterval(interval));
      
  };
//with backend

  // const GetApiResponse = async (e) => {
  //   setAnswer("Loading");
  //   const formData = new FormData();
  //   if (pdfText && question) {
  //     formData.append("pdfText", pdfText);
  //     formData.append("question", question);
  //   } else if (pdfText) {
  //     formData.append("pdfText", pdfText);
  //   } else if (question) {
  //     formData.append("question", question);
  //   }
  //   setQuestion("");
  //   setfile(null);
  //   setPdfText(null);
  //   try {
  //     const response = await fetch(${LiveUrl}extract, {
  //       method: "POST",
  //       body: formData,
  //     });
  //     // if (!response.ok) {
  //     //   throw new Error("Network response was not ok");
        
  //     // }
  //     const data = await response.json();
  //     setAnswer(data.text);
  //   } catch (error) {
  //     setAnswer("Default");
  //   }
  // };

  //without backend
  const GetApiResponse = async () => {
  try {
    setAnswer("Loading");
    let prompt = "";
    if (pdfText && question) {
      prompt = pdfText + "\n" + question;
    } else if (pdfText) {
      prompt = pdfText;
    } else if (question) {
      prompt = question;
    }
    
    setQuestion("");
    setfile(null);
    setPdfText(null);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(
      prompt +
        " write question before answering with ques number like que 1. what is ... then next line ans:- do not give preemption just Start directly without intro."
    );
    setAnswer(result.response.text());
    
  } catch (error) {
    console.error(error);
    setAnswer("Default");
  }
};
  return (
    <div
      className={` w-[110%] ${
        file ? "h-[140px]" : "h-[70px]"
      } max-lg:w-[90%]   rounded-[40px] mt-10 bg-white text-black flex justify-between  ${
        file ? "items-end" : "items-center"
      } p-5 relative overflow-hidden`}
    >
      {file ? (
        <div className="absolute top-[10%]  w-[300px] h-[50px] flex items-center justify-start p-1 rounded-[20px]  max-sm:w-[200px]   border-gray-200 border-2">
          <div className=" relative ">
            {loading && (
              <div className="absolute inset-0 z-50 bg-[#A375FF] w-[50%] left-[25%] h-[80%] top-[10%] flex items-center justify-center">
                <CircularProgressWithLabel value={progress} />
              </div>
            )}
            <Image src={Pdf} alt="" className="mr-[10px] ml-3" />
          </div>
          <p className="text-[14px] w-[220px] max-sm:w-[120px]  h-5 overflow-hidden  text-start">
            {file?.name}
          </p>
        </div>
      ) : (
        <></>
      )}
      <div className="flex items-center justify-between w-full relative">
        {message ? (
          <p className="absolute top-[40px] left-[50px] text-gray-500 text-[14px]">
            Upload Pdf
          </p>
        ) : (
          <></>
        )}
        <Image src={image} alt="d" width={50} />
        <div style={{ position: "relative" }}>
          <input
            type="file"
            accept="application/pdf"
            id="file-upload"
            onChange={(e) => {
              extractText(e), setfile(e.target.files[0]);
            }}
            style={{
              display: "none", // Hide the default file input
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%", // Make the input cover the area
              height: "100%", // Make the input cover the area
              opacity: 0,
            }}
          />
          <label htmlFor="file-upload">
            <Image
              src={Plus}
              alt="Upload PDF"
              width={30}
              height={30}
              className="cursor-pointer ml-1 "
              onMouseEnter={() => {
                setMessage(true);
              }}
              onMouseLeave={() => {
                setMessage(false);
              }}
            />
          </label>
        </div>
        <input
          type="text"
          placeholder="Describe Your Requirement.."
          value={question}
          className="w-full m-1.5 p-1.5 outline-0 text-black/50 ml-[17px]"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Image
          src={pngwing}
          alt=""
          width={37}
          className={`${
            (question || pdfText) && !loading
              ? "cursor-pointer"
              : "pointer-events-none grayscale"
          }`}
          onClick={GetApiResponse}
        />
      </div>
    </div>
  );
}
