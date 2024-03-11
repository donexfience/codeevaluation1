import React, { useState } from 'react'

const Hoc = () => {
    const[state,setState]=useState(0);
    const increment=()=>{
        setState((count)=>count+1);
    }
  return (
    <div>
    <p>{state}</p>
      <button onClick={()=>increment()}>click </button>
    </div>
  )
}

export default Hoc
