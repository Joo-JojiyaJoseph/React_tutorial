import React from "react";
import { useEffect, useRef } from "react";
import { useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputElem = useRef();
  const btnClick = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "blue";
  };

  return (
    <div className="flex gap-10">
      <div className="bg-white shadow-lg select-none sm:p-4  rounded-2xl p-10">
        <button
          className="bg-sky-800 p-5 rounded-xl text-white"
          onClick={() => {
            setValue((prev) => prev - 1);
          }}
        >
          -1
        </button>
        <h1>{value}</h1>
        <button
          className="bg-sky-800 p-5 rounded-xl text-white"
          onClick={() => {
            setValue((prev) => prev + 1);
          }}
        >
          +1
        </button>

        <h1>Render count:{count.current}</h1>
        <p> start we dont want to rerender when value is chnged</p>
      </div>

      <div className="bg-white shadow-lg select-none sm:p-4  rounded-2xl p-10">
        <input type="text" ref={inputElem} />
        <button onClick={btnClick}>Click Here</button>

        <p>start of accesing dom element</p>
      </div>
    </div>
  );
};

export default UseRefHook;
