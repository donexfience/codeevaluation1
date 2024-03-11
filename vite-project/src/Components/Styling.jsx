import React from 'react'

const Styling = (props) => {
    let className=props.className?'primary':'danger'
  return (
    <div>
      <p className={className}>hello donex</p>
    </div>
  )
}

export default Styling
