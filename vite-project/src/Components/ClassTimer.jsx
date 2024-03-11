import React, { Component } from "react";

export default class ClassTimer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
