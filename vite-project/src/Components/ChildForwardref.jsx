import React, { Component } from 'react'

 export const ChildForwardref=React.forwardRef((props,ref)=>{
    <div>
        <input ref={ref}/>
    </div>
})
