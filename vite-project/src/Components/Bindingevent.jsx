import React, { Component } from "react";

class Bindingevent extends Component {
  constructor() {
    super();
    this.state = { message: "hello" };
    // this.handleClicks = this.handleClicks.bind(this);
  }

  handleClick = () => {
   
    this.setState({ message: "hoi" });
  };
  handleClicks() {
    this.setState({ message: "hey" });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={()=>this.handleClick()}>click here</button>
      </div>
    );
  }
}

export default Bindingevent;
