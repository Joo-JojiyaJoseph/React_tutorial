import React, { useState } from 'react'
import { useReducer } from 'react';

const UseReducerhook = () => {

const initialstate={count:0}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increase': {
            return {count:state.count+1}
        }
        case 'decrease': {
            return {count:state.count-1}
        }  case 'input': {
            return {count:action.payload}
        }
        default:{
            return state
        }
    }
}

   const[state,dispatch]= useReducer(reducer,initialstate)

  return (
    <div className='flex gap-10'>
         <button className="bg-sky-800 p-5 rounded-xl text-white" onClick={() => dispatch({type:'increase'})}>
          +1
        </button>
        <h1>{state.count}</h1>
        <button className="bg-sky-800 p-5 rounded-xl text-white"onClick={() => dispatch({type:'decrease'})}>  -1 </button>
   <br/>
    <input type="number" value={state.count} onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})}/>

    </div>
  )
}

export default UseReducerhook