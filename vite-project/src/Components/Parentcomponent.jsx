import React, { Component } from "react";
import Childcomponent from "./Childcomponent";

class Parentcomponent extends Component {
  constructor() {
    super();
    this.state = { message: "hello" };
    this.greeParent = this.greeParent.bind(this);
  }

  greeParent() {
    alert(`${this.state.message} Donex`);
  }

  render() {
    return (
      <div>
        <Childcomponent greeParent={this.greeParent} />
      </div>
    );
  }
}

export default Parentcomponent;
