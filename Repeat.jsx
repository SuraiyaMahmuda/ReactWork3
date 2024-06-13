import React, { useState } from "react";
function Repeat() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(5);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleCounter = () => {
    if (counter === text) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };
  setInterval(handleCounter, 4);
  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <br />
        <h1>Repeated Counter</h1>
        <br />
        <div className="row">
          <p className="form-control">
            <strong>Set upper Limit</strong>
          </p>
          <input
            type="text"
            value={text}
            className="text my-1 form-control"
            onChange={handleText}
          />
          <h1 className="text-center my-3" style={{ fontsize: 100 }}>
            {counter}
          </h1>
        </div>
      </div>
    </>
  );
}
export default Repeat;
