import React from "react";

const TextBox = ({ content, setContent }) => {
  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <textarea
      className="form-control"
      style={{ textAlign: "center" }}
      rows="10"
      value={content}
      onChange={handleInputChange}
    />
  );
};

export default TextBox;
