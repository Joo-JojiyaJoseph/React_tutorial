import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffectHook = () => {
    useEffect(()=>{
console.log('msg from useEffect')
    },[])
    useLayoutEffect(()=>{
        console.log('msg from useLayoutEffect')
            },[])
  return (
    <div>
        <h2>Test message</h2>
        {Array(40000).fill('').map((item,index)=>(
            <li key={index}>{Math.pow(Math.random(),10)}</li>
        ))}
    </div>
  )
}

export default UseLayoutEffectHook