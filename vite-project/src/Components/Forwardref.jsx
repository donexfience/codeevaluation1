import React, { Component } from "react";
import PropTypes from "prop-types";
import { ChildForwardref } from "./ChildForwardref";


export class Forwardref extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <h2>{this.props}</h2>
        <ChildForwardref ref={this.inputRef} />
        <button onClick={this.handleclick}>Click me</button>
      </div>
    );
  }
}

Forwardref.propTypes = {
  title: PropTypes.string.isRequired, // Define propTypes
};

export default Forwardref;
