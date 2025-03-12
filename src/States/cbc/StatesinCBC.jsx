import { Component } from "react";

class StatesinCBC extends Component {
    state = { count: 0};
    
    increment = () => {
        this.setState({count: this.state.count + 1})
    };

    decrement = () => {
        this.setState({count: this.state.count - 1 })
    };

    reset = () => {
        this.setState({count: this.state.count = 0})
    };

    render() {
        return (
            <div>
                <h1>State in Class based </h1>
                <h2> 
                    Counter <mark>{this.state.count} </mark>
                </h2>

                <button onClick={this.increment}> increment </button>
                <button onClick={this.decrement} > decrement </button>
                <button onClick={this.reset} > reset </button>
            </div>
        )
    }
}
export default StatesinCBC;