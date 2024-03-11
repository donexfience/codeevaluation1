import React, { useRef } from 'react'


const Refodemo = () => {
    const inputref=useRef(null);
    const handleclick=()=>{
        inputref.current.focus();
    }
    const handlechange=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
      <input type='text' onChange={handlechange} ref={inputref}/>
      <button onClick={handleclick}>hello</button>
    </div>

  )
}

export default Refodemo
