import { Component } from "react";

class Letter extends Component {
    render() {
        return (
            <button className={["square", this.props.background].join(' ')} >
                {this.props.value}
            </button>
        )
    }
}

export default Letter;