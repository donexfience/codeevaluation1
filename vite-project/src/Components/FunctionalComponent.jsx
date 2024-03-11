import React, { useState } from 'react'

const FunctionalComponent = () => {
    const [state,setState]=useState(0)
    function increment(){
        setState((count)=>count+1)
        console.log(state);
    }
    
  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>CLICK</button>

    </div>
  )
}

export default FunctionalComponent
