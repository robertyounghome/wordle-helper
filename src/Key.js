import { Component } from "react";

class Key extends Component {
    handleValue = () => {
        this.props.clickHandler({text: this.props.value});            
    }

    render() {
        return (
            <button className="rounded key" onClick={this.handleValue}>{this.props.value}</button>
        )
    }
}

export default Key