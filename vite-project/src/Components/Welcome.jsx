import { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = { message: "hello world" };
  }
  handleClick() {
    this.setState({ message: "thankyour for subscriibing" });
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <h4>donex</h4>
        <button onClick={() => this.handleClick()}>click</button>
      </div>
    );
  }
}
export default Welcome;
