import React, { useEffect } from 'react'

const Usedoctitle = (count) => {
    useEffect(()=>{
        document.title=count;
    },[count])
  return (

    <div>
      
    </div>
  )
}

export default Usedoctitle
