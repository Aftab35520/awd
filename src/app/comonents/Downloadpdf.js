"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

export default function DownloadSection({
  generatePDFRef,
  setHnumber,
  Handwriting,
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  // const generatePDF = async () => {
  //   setIsGenerating(true);
  //   try{
  //     const input = generatePDFRef.current;
  //   const canvas = await html2canvas(input, { scale: 2 });
  //   const imgData = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF("p", "mm", "a4");
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = pdf.internal.pageSize.getHeight();

  //   const imgProps = pdf.getImageProperties(imgData);
  //   const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   let heightLeft = imgHeight;
  //   let position = 0;

  //   pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
  //   heightLeft -= pdfHeight;

  //   while (heightLeft > 0) {
  //     position = heightLeft - imgHeight;
  //     pdf.addPage();
  //     pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
  //     heightLeft -= pdfHeight;
  //   }

  //   pdf.save("notebook.pdf");
  //   }catch(e){
  //      console.log("PDF generation failed:", e);
  //   }
  //   finally{
  //     setIsGenerating(false); 

  //   }
  // };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const input = generatePDFRef.current;
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      // ✅ Just delete last page without checking
      pdf.deletePage(pdf.internal.getNumberOfPages());

      pdf.save("notebook.pdf");
    } catch (e) {
      console.log("PDF generation failed:", e);
    } finally {
      setIsGenerating(false);
    }
  };
  return (
    <div className="sticky top-0 FontSelectorContainer">
      <div className="w-full  flex justify-between items-end">
        <select
          className="FontSelectorMobile bg-[#1447E6] text-white p-2 rounded hidden"
          onChange={(e) => setHnumber(Number(e.target.value))}
        >
          {Handwriting.map((font, index) => (
            <option key={index} value={index} style={{ fontFamily: font.name, fontSize: font?.name == 'GloriaHallelujah' ? '10px' : font?.name == 'Deepali Font' ? '22px' : '15px' }}>
              Handwriting {index + 1}
            </option>
          ))}
        </select>
        <button
          onClick={generatePDF}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          {!isGenerating ? 'Generate PDF' : "Generating....."}
        </button>
      </div>


      <p
        className="text-white animate-[fadeInOut_2s_ease-in-out_infinite] AlertDesktop"
        style={{
          animationName: "fadeInOut",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease-in-out",
        }}
      >
        To access full customization features, please switch to a desktop
        device.
      </p>

      <div className="FontSelector">
        {Handwriting.map((font, index) => (
          <p
            key={index}
            className="p-[5px] ml-1 bg-pink-100 mb-1 cursor-pointer text-xl"
            onClick={() => setHnumber(index)}
            style={{ fontFamily: font.name }}
          >
            Handwriting {index + 1}
          </p>
        ))}
      </div>

    </div>
  );
}
