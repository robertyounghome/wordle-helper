import { Component } from "react";

class Color extends Component {
    handleValue = () => {
        this.props.clickHandler({background: this.props.background});            
    }

    render () {
        return (
            <button className={["color", this.props.background].join(' ')} 
                onClick={this.handleValue}>
            </button>
        )
    }
}

export default Color;