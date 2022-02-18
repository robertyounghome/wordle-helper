import Key from "./Key";
import { Component } from "react";

export const enter = 'Enter';
export const backspace = '<<';

class Keyboard extends Component {
   
    // outputEvent(event) {
    //     console.log(event)
    //     this.setState({text: "Junk"})
    // }
    // outputEvent = (text) => {
    //     this.setState({text: text});
    // }
    render () {
        return (
            <div id="screen">
                <div id="keyboard">
                    <div id="row1">
                        <Key value='Q' clickHandler={this.props.clickHandler}/>
                        <Key value='W' clickHandler={this.props.clickHandler}/>
                        <Key value='E' clickHandler={this.props.clickHandler}/>
                        <Key value='R' clickHandler={this.props.clickHandler}/>
                        <Key value='T' clickHandler={this.props.clickHandler}/>
                        <Key value='Y' clickHandler={this.props.clickHandler}/>
                        <Key value='U' clickHandler={this.props.clickHandler}/>
                        <Key value='I' clickHandler={this.props.clickHandler}/>
                        <Key value='O' clickHandler={this.props.clickHandler}/>
                        <Key value='P' clickHandler={this.props.clickHandler}/>
                    </div>
                    <div id="row2">
                        <Key value='A' clickHandler={this.props.clickHandler}/>
                        <Key value='S' clickHandler={this.props.clickHandler}/>
                        <Key value='D' clickHandler={this.props.clickHandler}/>
                        <Key value='F' clickHandler={this.props.clickHandler}/>
                        <Key value='G' clickHandler={this.props.clickHandler}/>
                        <Key value='H' clickHandler={this.props.clickHandler}/>
                        <Key value='J' clickHandler={this.props.clickHandler}/>
                        <Key value='K' clickHandler={this.props.clickHandler}/> 
                        <Key value='L' clickHandler={this.props.clickHandler}/>
                    </div>
                    <div id="row3">
                        <Key value='Enter' clickHandler={this.props.clickHandler}/>
                        <Key value='Z' clickHandler={this.props.clickHandler}/>
                        <Key value='X' clickHandler={this.props.clickHandler}/>
                        <Key value='C' clickHandler={this.props.clickHandler}/>
                        <Key value='V' clickHandler={this.props.clickHandler}/>
                        <Key value='B' clickHandler={this.props.clickHandler}/>
                        <Key value='N' clickHandler={this.props.clickHandler}/>
                        <Key value='M' clickHandler={this.props.clickHandler}/>
                        <Key value='<<' clickHandler={this.props.clickHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Keyboard;