import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [number, SetNumber] = useState(0);
  const [counter, SetCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done!");
    return Math.pow(num, 3);
  }
  const result = useMemo(() => cubeNum(number), [number]); // only execute the cunemun  function when number is changed
  return (
    <div className="flex gap-10">
      <div className="bg-white shadow-lg select-none sm:p-4  rounded-2xl p-10">
        <input
          type="number"
          value={number}
          onChange={(e) => {
            SetNumber(e.target.value);
          }}
        />
        <h1>Cube of Tyhe Number :{result}</h1>
        <p>only execute the cunemun function when number is changed </p>
      </div>

      <div className="bg-white shadow-lg select-none sm:p-4  rounded-2xl p-10">
        <button
          onClick={() => {
            SetCounter(counter + 1);
          }}
          className="bg-sky-800 p-5 rounded-xl text-white"
        >
          Counter++
        </button>
        <h1>Counter:{counter}</h1>
      </div>
    </div>
  );
};

export default UseMemoHook;
