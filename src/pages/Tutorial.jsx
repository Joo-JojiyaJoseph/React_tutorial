import React from 'react'
import UseStates from "../components/tutorial/hooks/UseStates";
import UseStatesMultiple from "../components/tutorial/hooks/UseStatesMultiple";
import UseEffectHook from "../components/tutorial/hooks/UseEffectHook";
import UseRefHook from "../components/tutorial/hooks/UseRefHook";
import UseMemoHook from "../components/tutorial/hooks/UseMemoHook";
import UseCallbackHook from "../components/tutorial/hooks/UseCallbackHook";
import Profile from "../components/tutorial/Profile";
import Footer from "../components/tutorial/Footer";
import UseReducerhook from "../components/tutorial/hooks/UseReducerhook";
import UseLayoutEffectHook from "../components/tutorial/hooks/UseLayoutEffectHook";

const Tutorial = () => {
  return (
    <div>
 <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseState Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
        <UseStates />
        <UseStatesMultiple />
      </div>
    </div>

    <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseEffect Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
        <UseEffectHook/>
      </div>
    </div>

    <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseRef Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
        <UseRefHook/>
      </div>
    </div>

    <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseMemo Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
        <UseMemoHook/>
      </div>
    </div>

    <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseCalllBack Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
        <UseCallbackHook/>
      </div>
    </div>

    <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseContext Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
        <Profile/>
        <Footer/>
      </div>
    </div>

    <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseReducer Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
      <UseReducerhook/>
      </div>
    </div>

    <div className="container  mx-auto py-10">
      <h2 className="text-2xl">UseLayout Hook</h2>
      <div className="flex gap-10 mx-auto bg-amber-900 p-10">
      <UseLayoutEffectHook/>
      </div>
    </div>
    

    </div>
  )
}

export default Tutorial