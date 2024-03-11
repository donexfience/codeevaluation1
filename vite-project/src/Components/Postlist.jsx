import { Component } from "react";
import axios from "axios";

export class Postlist extends Component {
  constructor() {
    super();
    this.state = { userId: "" };
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.userId);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userId"
            onChange={this.changeHandler}
            value={this.userId}
          />
          <button>click me</button>
        </form>
      </div>
    );
  }
}
