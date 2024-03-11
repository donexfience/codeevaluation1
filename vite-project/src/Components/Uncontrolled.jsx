import { Component } from "react";

class Uncontrolled extends Component {
  constructor() {
    super();
    this.state = { username: "" };
    this.state = { comment: "" };
    this.handleinput = this.handleinput.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handlesumbit = this.handlesumbit.bind(this);
  }
  handleinput() {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  }
  handleComment() {
    this.setState({ comment: event.target.value });
  }
  handlesumbit() {
    alert(
      `${this.state.username} hello you are commented ${this.state.comment}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handlesumbit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleinput}
          />
          <label>comments:</label>
          <textarea value={this.state.comment} onChange={this.handleComment} />
        </div>
        <button>submit</button>
      </form>
    );
  }
}
export default Uncontrolled;
