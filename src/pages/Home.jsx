import React from "react";

import UseStates from "../components/tutorial/UseStates";
import UseStatesMultiple from "../components/tutorial/UseStatesMultiple";
import UseEffectHook from "../components/tutorial/UseEffectHook";
import UseRefHook from "../components/tutorial/UseRefHook";

const Home = () => {
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

</div>
  


  );
};

export default Home;
