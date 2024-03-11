import React, { Component } from 'react'

export default class Classcounter extends Component {
    constructor(){
        super()
        this.state={counter:0}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick=()=>{
        this.setState((prevstate)=>{return{counter:prevstate.counter+1}})
    }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
