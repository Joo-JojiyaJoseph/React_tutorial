// import './App.css'
import { useEffect, useRef } from "react";
import { useState } from "react";

function Test() {


//----/********************************************/------------------------------------------------------------
  //-----------start of useState Hook-------------------

  // const [color,setcolor]=useState('Red');
  //  const changeColor=()=>{
  //   setcolor('Blue')
  //  }
  //   return (
  //     <div>
  //           <h1 className="text-3xl font-bold underline text-red-600"> my favorite color is {color} </h1>
  //     <button onClick={changeColor}>blue</button>
  //     </div>
  //   )

  //--------Start multiple useState---------------------

  // const [car,setcar]=useState({
  //   brand:"Ferrari",
  //   model:"Roma",
  //   year:"2023",
  //   color:"red",
  // });
  // const changeColor=()=>{
  //   setcar((prev)=>{
  //     return{ ...prev,color:"blue"}
  //   })
  // }

  //  return (
  //    <div>
  //          <h1> my {car.brand}</h1>
  //          <h2> it is {car.color} {car.model} a {car.year}  from </h2>
  //          <button onClick={changeColor}>blue</button>
  //    </div>
  //  )

  //--------------End multiple useState---------------

  //  const[count,setCount]=useState(0);
  //  const increaseCount=()=>{
  //   setCount(prev=>prev+1)
  //   setCount(prev=>prev+1)
  //   setCount(prev=>prev+1)
  //  }
  //            return (
  //              <div>
  //                    <h1> Count:{count}</h1>
  //                        <button onClick={increaseCount}>Increase</button>
  //              </div>
  //            )

  //----------------End of useState hook -------------------------------

  //----/********************************************/------------------------------------------------------------



  //----/********************************************/------------------------------------------------------------
  //------------ Start of useEffect Hook------------------

  // const [count, setCount] = useState(0);

  //      --------------- start continuously -----
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // });
//      --------------- Endcontinuously -----


//      --------------- start only one time when loaded -----
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // },[]);

  //      --------------- End  only one time when loaded -----



  //      --------------- start whenever count changes execute -----

  // const [name, setName] = useState("joj");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // },[count,name]);
  
  //      --------------- End  whenever count changes execute -----


  // return (
  //   <>
  //     <h1> I've rendered {count} time!</h1>
  //   </>
  // );
  //------------ End of useEffect Hook------------------

  //----/********************************************/------------------------------------------------------------



  //----/********************************************/------------------------------------------------------------
    //------------ End of useRef Hook------------------


    //---------- start we dont want to rerender when value is chnged
  //   const[value,setValue]=useState(0)
  //   const count=useRef(0);
  //   useEffect(()=>{
  //     count.current=count.current+1;
  //   })
 
  //     return (
  //   <>
  //     <button onClick={()=>{ setValue(prev=>prev-1) }}>-1</button>
  //     <h1>{value}</h1>
  //     <button onClick={()=>{ setValue(prev=>prev+1) }}>+1</button>

  //     <h1>Render count:{count.current}</h1>
  //   </>
  // )
  //----------End  we dont want to rerender when value is chnged


//-------------start of accesing dom element

// const inputElem=useRef()
// const btnClick=()=>{
//   console.log(inputElem.current)
//   inputElem.current.style.background="blue";
// }
// return (
//   <>
//    <input type="text"ref={inputElem}/>
//    <button onClick={btnClick}>Click Here</button>
//   </>
// )

//-------------End of acc4esing dom element

    //------------ End of useRef Hook------------------

  //----/********************************************/----------------------------------
}

export default Test;
