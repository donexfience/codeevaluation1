import React, { Component } from "react";

class Conditionalrendering extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }
  render() {
return this.state.isLoggedIn?<div>hello</div>:<div>hei</div>
 

     
  }
}
export default Conditionalrendering;
