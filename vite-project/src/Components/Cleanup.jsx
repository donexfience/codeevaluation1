import React, { useState } from 'react'
import Mousedirection from './Mousedirection'

const Cleanup = () => {
    const [isVisible,setVisible]=useState(false)
  return (
 
    <div>
        <button onClick={()=>{setVisible(!isVisible)}}>clic me</button>
      {isVisible && <Mousedirection/>}
    </div>
  )
}

export default Cleanup
