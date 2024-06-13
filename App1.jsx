import React, { useState } from "react";
import Navbar from "./Navbar";
import TextBox from "./TextBox";

const App1 = () => {
  const [content, setContent] = useState("");

  const convertToUpperCase = () => {
    setContent(content.toUpperCase());
  };

  const calculateSummary = () => {
    const charCount = content.length;
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    return `Characters: ${charCount}, Words: ${wordCount}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <div className="container mt-4">
        <TextBox content={content} setContent={setContent} />
        <button className="btn btn-primary mt-3" onClick={convertToUpperCase}>
          Convert to Upper Case
        </button>
        <div className="mt-3">{calculateSummary()}</div>
      </div>
    </div>
  );
};

export default App1;
