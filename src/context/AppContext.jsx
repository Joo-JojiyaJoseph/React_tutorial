import React from 'react'
import  {createContext} from 'react';

export const AppContext=createContext();

 const ContextProvider =(props)=>{
    const phone="+1 12345678"
     const name="joj"
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )

 }
 export default ContextProvider