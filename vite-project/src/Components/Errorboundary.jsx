import React from 'react'

const Errorboundary = ({hero}) => {
    if(hero=='Joker')
  return (
    <div>
      {hero}
    </div>
  )
}

export default Errorboundary
