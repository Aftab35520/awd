"use client";
import { useRef, useState } from "react";
import { useMyContext } from "./ContextApi/CreateContext";
import Header from "./Home/Header";
import Herro from "./Home/Herro";
import Script from "next/script";
import DownloadSection from "./comonents/Downloadpdf";
import NotebookDisplay from "./comonents/NoteBookDisplay";
import "./Globle.css";


export default function Home() {
  const { Answer } = useMyContext();
  const notebookRef = useRef(null);
  const [HNumber, setHnumber] = useState(0);

  const Handwriting = [
    { name: "Deepali Font", size: "55px", paddingTop: "3cm", lineHeight: '37.4px' },
    { name: "GloriaHallelujah", size: "20px", paddingTop: "2.5cm", lineHeight: '38px' },
    { name: "handwriting-2", size: "35px", paddingTop: "2.5cm", lineHeight: '37px' },
    { name: "handwriting-3", size: "35px", paddingTop: "3cm", lineHeight: '37.7px' },
    { name: "handwriting-4", size: "35px", paddingTop: "3.1cm", lineHeight: '37.5px' },
    { name: "handwriting-5", size: "35px", paddingTop: "3cm", lineHeight: '37.6px' },
    { name: "handwriting-6", size: "30px", paddingTop: "3cm", lineHeight: '38px' },
    { name: "handwriting-7", size: "35px", paddingTop: "3cm", lineHeight: '38px' },
    { name: "handwriting-8", size: "30px", paddingTop: "2.5cm", lineHeight: '37.6px' },
  ];

  return (
    <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4">
      <div className="w-full flex flex-col items-center ">
        <Header />
        <Herro />
        <div className="flex flex-row-reverse relative FlexingCol">
          {Answer !== "Loading" && Answer !== "Default" && (
            <DownloadSection
              generatePDFRef={notebookRef}
              setHnumber={setHnumber}
              Handwriting={Handwriting}
            />
          )}

          <NotebookDisplay
            Answer={Answer}
            notebookRef={notebookRef}
            Handwriting={Handwriting}
            HNumber={HNumber}
          />
          <Script
            strategy="afterInteractive"
            src="//pl27331529.profitableratecpm.com/4f/23/14/4f23143fd5de57320e004c6b592d471c.js"
          />
          <Script
        strategy="afterInteractive"
        src="//pl27331556.profitableratecpm.com/cd/55/b9/cd55b9819f7ac924b683c4a732815ef7.js"
      />
        </div>

      </div>

    </div>
  );
}
