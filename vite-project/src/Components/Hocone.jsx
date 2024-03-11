import React, { useState } from 'react'

const Hocone = () => {
    const[state,setState]=useState(0);
    const increment=()=>{
        setState((count)=>count+1);
    }
  return (
    <div>
    <p>{state}</p>
      <button onMouseOver={()=>increment()}>click </button>
    </div>
  )
}

export default Hocone
 