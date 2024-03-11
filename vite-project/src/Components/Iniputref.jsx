import React, { Component } from 'react';

export default class Iniputref extends Component {
    constructor() {
        super();
        this.state = { message: true }; // Change 'messag' to 'message'
        this.input = React.createRef();
        this.focusinput = this.focusinput.bind(this);
        this.handleClick = this.handleClick.bind(this); // Bind handleClick to 'this'
    }
    
    focusinput() {
        this.input.current.focus();
    }
      focusinput() {
        this.input.current.focus();
    }

    handleClick() {
        let value = true;
        this.setState({ message: value ? (<h1>hello</h1>) : (<h3>hi</h3>) });
    }
     handle=()=>{
        this.s
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type='text'  ref={this.input} />
                <input type='text' ref={this.input} /> 
                <button onClick={this.focusinput}>click me</button>
                <button onClick={this.focusinput}>click again</button>
            </div>
        );
    }
}
