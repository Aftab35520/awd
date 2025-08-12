'use client'
import React, { useState } from "react";
import FontGeneratingLoader from "./FontLoading";
import LiveUrl from "@/app/comonents/Url";
const FontUploadBox = () => {
  const [fileName, setFileName] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setfile] = useState(null)
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    const email = JSON.parse(localStorage.getItem('user')).email;
    const formData = new FormData();
    formData.append("file", file);
    formData.append('email', email); // Append email or any other data
    setLoading(true)
    try {
      const res = await fetch(`${LiveUrl}generatefont`, {
        method: "POST",
        body: formData,
        headers: {
          'email': email,
        },
      });

      const data = await res.json();
      console.log(data)
      if (data.success == true) {

        let userdata = localStorage.getItem('user')
        if (userdata) {
          userdata = JSON.parse(userdata)
          userdata.fontsGenerated = data.fontsGenerated
          localStorage.setItem('user',JSON.stringify(userdata))

        }
      }
      else{
        console.log(data)
      }

    } catch (err) {
      console.error("Upload error:", err);
    }
    finally {
      setLoading(false);

    }
  };


  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setfile(e.target.files[0]); // ✅ fixed here
      setUploadProgress(0);

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) clearInterval(interval);
      }, 200);
    }
  };
  const handleDownloadTemplate = () => {
    const link = document.createElement("a");
    link.href = "/Note1.png";
    link.download = "font-template.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full md:w-1/3  bg-[#f4f8fc] p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center">
      <FontGeneratingLoader isLoading={loading} />
      {/* Download Template in Corner */}
      <button
        onClick={handleDownloadTemplate}
        className="absolute top-4 right-4 text-blue-500 hover:underline text-sm"
      >
        Download Template
      </button>

      {/* Instructions */}
      <div className="mb-6 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Generate Your Font</h2>
        <ol className="list-decimal list-inside text-gray-600 text-sm mt-2 space-y-1 text-left">
          <li>Download the template using the button above.</li>
          <li>Fill it out neatly with your handwriting.</li>
          <li>Upload the filled template below.</li>
          <li>Click "Generate Font" to create your font.</li>
        </ol>
      </div>

      {/* Upload Box */}
      <label
        htmlFor="fileInput"
        className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer bg-white hover:border-blue-400 transition"
      >
        <img
          src="/path/to/upload-icon.png"
          alt="Upload"
          className="w-12 h-12 mb-2 opacity-70"
        />
        <p className="text-gray-500 text-sm">
          Drop your image here, or{" "}
          <span className="text-blue-500">browse</span>
        </p>
        <p className="text-gray-400 text-xs">
          Supports: JPG, JPEG2000, PNG
        </p>
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/png,image/jpeg,image/jpg"
        onChange={handleFileSelect}
      />

      {/* Progress Bar */}
      {fileName && (
        <div className="w-full mt-4 bg-white rounded-lg p-2 shadow-sm">
          <p className="text-sm text-gray-600 truncate">{fileName}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {uploadProgress}% {uploadProgress < 100 && "- uploading..."}
          </p>
        </div>
      )}

      {/* Generate Font Button */}
      <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-md transition" onClick={handleUpload}>
        Generate Font
      </button>
    </div>
  );
};

export default FontUploadBox;
