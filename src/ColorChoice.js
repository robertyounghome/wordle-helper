import { Component } from "react";
import Color from "./Color";

class ColorChoice extends Component {
    // setChoice(value) {
    //     console.log(value)
    //     this.props.clickHandler(value)
        // this.setState(value)
    // }
    render () {
        return (
            <div id="colorchoice">
                <Color background="background-grey"
                    clickHandler={this.props.clickHandler}>
                </Color>
                <Color background="background-yellow"
                    clickHandler={this.props.clickHandler}>
                </Color>
                <Color background="background-green"
                    clickHandler={this.props.clickHandler}>
                </Color>
            </div>
        )
    }
}

export default ColorChoice;