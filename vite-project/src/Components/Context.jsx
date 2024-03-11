import React,{useContext} from 'react'
import { appcontex } from '../App'


const Context = () => {
    const {age,setAge}=useContext(appcontex);
    const handleclick=()=>{
        setAge((prev)=>prev+1)
    }
    
  return (
    <div>
        <h2>hello</h2>
      <h1>{age}</h1>
      <button onClick={handleclick}>clik</button>
    </div>
  )
}

export default Context
