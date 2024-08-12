import React from 'react'
import { useEffect, useRef } from "react";
import { useState } from "react";

const UseEffectHook = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [name, setName] = useState("joj");

      useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

// -------------------
    useEffect(() => {
    setTimeout(() => {
        const p=count1 + 1;
      setCount1(p);
      console.log(count1);
    }, 2000);
  },[]);

// -------------------

  
  useEffect(() => {
    setTimeout(() => {
      setCount2((count2) => count2 + 1);
    }, 1000);
  },[count,name]);

// -------------------

  return (
    <div className='bg-white shadow-lg select-none sm:p-4 h-40 rounded-2xl p-10'>
         <h1> I've rendered {count} time!  -----------rendered continuously after 2 sec.</h1>
         <h1> I've rendered {count1} time!  -----------rendered Only Once when loaded.</h1>
         <h1> I've rendered {count2} time!  -----------rendered whenever count changes</h1>
    </div>
  )
}

export default UseEffectHook