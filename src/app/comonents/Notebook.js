import { useEffect, useState } from "react";
import { useMyContext } from "../ContextApi/CreateContext";
import "../Globle.css";

export default function PaginatedNotebook({ Handwriting }) {
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
      style={{ fontFamily: Handwriting.name, fontSize: Handwriting.size }}
    >
      {pages.map((lines, index) => (
        <div
          key={index}
          className={"a4-page"}
          contentEditable={false} // disable contentEditable on whole page because of input
          style={{ whiteSpace: "pre-line", paddingTop: Handwriting.paddingTop,lineHeight:Handwriting.lineHeight}}
        >
          {/* Input field for this page */}
          <input
            type="text"
            value={pageInputs[index]}
            onChange={(e) => handleInputChange(index, e)}
            style={{
              width: "80%",
              boxSizing: "border-box",
              fontFamily: Handwriting.name,
              fontSize: Handwriting.size,
  
            }}
            className="absolute top-9"
          />

          {/* Text content lines */}
          <div
            contentEditable
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
