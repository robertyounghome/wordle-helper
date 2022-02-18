import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './Game';

function App() {
  // var [word_data, setWords] = useState(0);

  // useEffect(() => {
  //   fetch('/words').then(res => res.json()).then(data => {
  //     setWords(Array.from(data));
  //   });
  // }, []);

  return (
    <div className="App">
      <h1>Wordle Helper</h1>
      <Game/>
    </div>
  );
}

export default App;
