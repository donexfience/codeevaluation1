import React, { useCallback, useMemo, useState } from 'react'
import Usestatearray from './Usestatearray'

const Counters = () => {
    
    const [count , setCount]=useState(1)
    const handleClick=()=>{
        setCount((count)=>count+1)
        console.log('state chnaged');
    }
    useMemo(()=>{
        const change=()=>{
            console.log('hello')
        }
        change();
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>click</button>
      
    </div>
  )
}

export default  Counters
