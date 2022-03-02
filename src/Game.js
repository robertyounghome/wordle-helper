import Keyboard from "./Keyboard";
import { Component } from "react";
import Display from "./Display";
import ColorChoice from "./ColorChoice";
import Color from "./Color";
import Result from "./Result";

export const enter = 'Enter';
export const backspace = '<<';
export const init_value = '*';
export const init_background = "background-white";

class Game extends Component {  
    constructor(props) {
        super(props)
        // this.words = this.initializeArray()
        this.state = {text: "", background: "background-grey", 
            words: this.initializeArray(), row: 0, column: 0,
            remaining_words: [], mask: "", isLoaded: false,
            error: null};

        this.setChoice = this.setChoice.bind(this);
        this.outputValue = this.outputValue.bind(this);
        // this.remaining_words = this.remaining_words(this);

    }
    componentDidMount() {
        console.log("component did mount")
        fetch("/words")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                remaining_words: Array.from(result)
              });
            })
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
        //     (error) => {
        //       this.setState({
        //         isLoaded: true,
        //         error
        //       });
        //     }
        //   )
      }

    maskCode = (b) => b === "background-grey" ? 'B' : b === "background-green" ? 'G' : 'Y';

    setChoice(value) {
        console.log(value)
        this.setState(value);
    }

    setRemainingWords(words) {
        this.setState({remaining_words: words});
        console.log(this.state.remaining_words)
    }

    outputValue(value) {
        var words = this.state.words
        var row = this.state.row
        var column = this.state.column
        var text = this.state.text
        var mask = this.state.mask
        // update words array
        // if (column < 6) {
            
        // }
        // determine text 
        console.log(value.text)
        if (value.text === enter) {
            if (text.length === 5) {
                // validate that we are done and delete 
                console.log(value.text);
                // fetch('/filter?text='.concat(text,'&mask=',mask,'&words=',JSON.stringify(this.state.remaining_words))).then(res => res.json()).then(data => {
                //     this.setRemainingWords(Array.from(data));})
    // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://reqres.in/api/posts', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }

                var json_for_post = {text: text,
                    mask: mask,
                    words: this.state.remaining_words.toString()
                }
                console.log(json_for_post)
                fetch('/filter', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(json_for_post)
                     }).then(res => res.json()).then(data => {
                        this.setRemainingWords(Array.from(data));})    

                text = "";
                mask = "";
                column = 0;
                row++;
            }
        } else if (value.text === backspace) {
            if (column > 0) {
                column--;
                text = text.slice(0, -1);
                mask = mask.slice(0, -1);
                words[row][column].value = init_value;
                words[row][column].background = init_background;
            }
        } else if (column < 5) {
            words[row][column].value = value.text;
            words[row][column].background = this.state.background;
            text = text + value.text;
            mask += this.maskCode(this.state.background);
            column++;
        }
        if (column < 6 && row < 7) {
            value.words = words;
            value.mask = mask;
            value.text = text;
            value.column = column;
            value.row = row;
            this.setState(value);
            console.log(value)
        }
    }  

    initializeArray() {
        var a = new Array(6);
        for (var i = 0; i < a.length; i++) {
            a[i] = new Array(5);
            for (var j = 0; j < a[i].length; j++) {
                a[i][j] = {background: init_background, value: init_value};
            }
        }
        return a;
    }
    // copyArray() {
    //     var a = new Array(6);
    //     for (var i = 0; i < a.length; i++) {
    //         a[i] = new Array(5);
    //         for (var j = 0; j < a[i].length; j++) {
    //             a[i][j] = this.state.words[i][j];
    //         }
    //     }
    //     return a;
    // }
    render() {
        var error = this.state.error
        var isLoaded = this.state.isLoaded 
        if (error) {
          return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //   return <div>Loading...</div>;
        } else {
            return (
            <div id="game">
                <Display words={this.state.words} />
                <p>Selected Color:&nbsp;&nbsp;
                    <Color background={this.state.background}></Color>
                </p>
                <Keyboard clickHandler={this.outputValue}/>
                <ColorChoice clickHandler={this.setChoice}/>
                <Result value={this.state.remaining_words}/>
            </div>
            )
        }
    }
}

export default Game;