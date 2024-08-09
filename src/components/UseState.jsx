import React, { useState } from "react";

export const UseState = () => {
  const [color, setcolor] = useStatee("Red");
  const changeColor = () => {
    setcolor("Blue");
  };

  return (
    <div>
    
        <h1 className="text-3xl font-bold underline text-red-600">  my favorite color is {color}{" "}</h1>
        <button onClick={changeColor}>blue</button>
        
      </div>
  
  );
};
