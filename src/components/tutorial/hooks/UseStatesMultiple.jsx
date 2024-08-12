import React, { useState } from 'react'

const UseStatesMultiple = () => {

   const[count,setCount]=useState(0);
   const increaseCount=()=>{
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
   }

    const [car,setcar]=useState({
    brand:"Ferrari",
    model:"Roma",
    year:"2023",
    color:"red",
  });
  const changeColor=()=>{
    setcar((prev)=>{
      return{ ...prev,color:"blue"}
    })
  }
  return (
    <div className='flex gap-10'>
    <div className='bg-white shadow-lg select-none sm:p-4 h-40 rounded-2xl p-10'>
    <h1> my {car.brand}</h1>
          <h2> it is {car.color} {car.model} a {car.year}  from </h2>
         <button onClick={changeColor} className="bg-sky-800 p-5 rounded-xl text-white">blue</button>

    </div>
          <div className='bg-white shadow-lg select-none sm:p-4 h-40 rounded-2xl p-10'>
          <h1> Count:{count}</h1>
          <button onClick={increaseCount} className="bg-sky-800 p-5 rounded-xl text-white">Increase</button>
          </div>
        
    </div>

    
  )
}

export default UseStatesMultiple