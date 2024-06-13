import React, { useState } from "react";
function Increment() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center" }}>Normal Counter</h2>
      <h1 className="text-center my-1">{counter}</h1>
      <button
        className="btn btn-secondary"
        onClick={increment}
        style={{ textAlign: "center" }}
      >
        Increase <br />
      </button>
    </div>
  );
}
export default Increment;
