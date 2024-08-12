import React, { useCallback, useState } from 'react'
import Header from '../Header';

const UseCallbackHook = () => {
    const [count,setCount]=useState(0);
    const newFun=useCallback(()=>{},[])
  return (
    <div> 
        <Header newFun={newFun}/>
        <h1 className='text-white'>{count}</h1>
    <button onClick={()=>{setCount(prev=>prev+1)}} className="bg-sky-800 p-5 rounded-xl text-white" >Click Here</button>

</div>
  )
}

export default UseCallbackHook