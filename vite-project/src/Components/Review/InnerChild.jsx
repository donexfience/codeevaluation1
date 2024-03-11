import React, { useContext } from 'react'
import { ParentCounterContext } from './ParentCounter'

const InnerChild = () => {
  
  const name=useContext(ParentCounterContext)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default InnerChild
