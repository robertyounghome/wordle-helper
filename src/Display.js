import { Component } from "react";
import Word from "./Word";

class Display extends Component {
    render() {
        return (
            <div id="display">
                <Word letters={this.props.words[0]}/>
                <Word letters={this.props.words[1]}/>
                <Word letters={this.props.words[2]}/>
                <Word letters={this.props.words[3]}/>
                <Word letters={this.props.words[4]}/>
                <Word letters={this.props.words[5]}/>
            </div>
        )
    }
}

export default Display;