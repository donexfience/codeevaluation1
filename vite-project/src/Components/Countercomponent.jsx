import { Component } from "react";

class CounterComponent extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({counter:this.state.counter+1}),
      () => {
        console.log(this.state.counter); // Log the updated state here
      }
    
}

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.handleClick()}>
          Click to change count
        </button>
      </div>
    );
  }
}

export default CounterComponent;
