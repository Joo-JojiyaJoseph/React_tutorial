import React, { useState } from "react";

const UseStates = () => {
  const [color, setcolor] = useState("Red");
  const changeColor = () => {
    setcolor("Blue");
  };
  return (
    <div className="bg-white shadow-lg select-none sm:p-4 h-40 rounded-2xl p-10">
      <h1 className=""> my favorite color is {color} </h1>
      <p>start of useState Hook, change text based on clicking buttton</p>
      <button onClick={changeColor} className="bg-sky-800 p-5 rounded-xl text-white">buttonBlueClick</button>
    </div>
  );
};

export default UseStates;
