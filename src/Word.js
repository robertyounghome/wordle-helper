import { Component } from "react";
import Letter from "./Letter";

class Word extends Component {
    render() {
        return (
            <div id="word">
                <Letter background={this.props.letters[0].background}
                value={this.props.letters[0].value}></Letter>
                <Letter background={this.props.letters[1].background}
                value={this.props.letters[1].value}></Letter>
                <Letter background={this.props.letters[2].background}
                value={this.props.letters[2].value}></Letter>
                <Letter background={this.props.letters[3].background}
                value={this.props.letters[3].value}></Letter>
                <Letter background={this.props.letters[4].background}
                value={this.props.letters[4].value}></Letter>                                              
            </div>
        )
    }
}

export default Word;