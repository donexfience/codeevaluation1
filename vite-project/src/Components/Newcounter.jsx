import { Component } from "react";

class Newcounter extends Component{
    constructor(){
        super()
        this.state={count:0}
    }
    handleClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
    
    render(){
        return(
            <div>
                <p>{this.count}</p>
                <button onClick={this.handleClick()}>click me</button>
            </div>
        )
    }

}
export default Newcounter;