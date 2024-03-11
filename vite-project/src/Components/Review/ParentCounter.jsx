import React, { useState } from 'react'
import Counterchild from './Counterchild';
export const ParentCounterContext=React.createContext();
const ParentCounter = () => {
    const name="donex"
  return (
    <div>
        <ParentCounterContext.Provider value={name}>
            <Counterchild/>
        </ParentCounterContext.Provider>
      
    </div>
  )
}

export default ParentCounter
