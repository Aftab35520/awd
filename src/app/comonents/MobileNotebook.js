import { useEffect, useState } from "react";
import { useMyContext } from "../ContextApi/CreateContext";
import "../Globle.css";

export default function PaginatedNotebookMobile({ Handwriting }) {
  const { Answer } = useMyContext();
  const [pages, setPages] = useState([]);
  // State to store input value per page (array of strings)
  const [pageInputs, setPageInputs] = useState([]);

  useEffect(() => {
const safeAnswer = Answer || "Default";
    const cleanedText = Answer.replace(/\*/g, "").trim();
    const lines = cleanedText.split("\n").map(line => line.trim());

    const LINES_PER_PAGE = 7;
    const chunks = [];

    for (let i = 0; i < lines.length; i += LINES_PER_PAGE) {
      const chunk = lines.slice(i, i + LINES_PER_PAGE);
      chunks.push(chunk);
    }

    setPages(chunks);
    // Initialize pageInputs with empty strings for each page
    setPageInputs(new Array(chunks.length).fill(""));
  }, [Answer]);


  const handleInputChange = (index, event) => {
    const newInputs = [...pageInputs];
    newInputs[index] = event.target.value;
    setPageInputs(newInputs);
  };
  return (
    <div
      className="NotebookContainer relative"
      style={{ fontFamily: Handwriting?.name, fontSize: Handwriting?.name === "Deepali Font" ?  "25px" :Handwriting?.name==="GloriaHallelujah"?'12px': "18px" }}
    >
      {pages.map((lines, index) => (
        <div
          key={index}
          className={"a4-pageMobile"}
          contentEditable={false} // disable contentEditable on whole page because of input
          style={{ whiteSpace: "pre-line", paddingTop: Handwriting?.name === "Deepali Font" ?  "55px" :Handwriting?.name==="GloriaHallelujah"?'53px': "50px",lineHeight: Handwriting?.name === "Deepali Font" ?  "17.3px" :Handwriting?.name==="GloriaHallelujah"?'17px': "17.5px" }}
        >
          {/* Input field for this page */}
      

          {/* Text content lines */}
          <div
            
            suppressContentEditableWarning
            style={{ whiteSpace: "pre-line" }}
          >
            {lines.join("\n")}
          </div>
        </div>
      ))}
    </div>
  );
}
