import React, { useState } from "react";

function App() {

  const[count, setcount]=useState(0);

  function decCount(){
    setcount(count-1);
  }
  function IncCount(){
    setcount(count+1);
  }

  function reset(){
    setcount(0);
  }

  return (
    <div className="App">
      <div>
        Incress and Decress
      </div>
      
      <button onClick={decCount}>
        -
      </button>

      <div>
        {count}
      </div>

      <button onClick={IncCount}>
        +
      </button>
      <div></div>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
