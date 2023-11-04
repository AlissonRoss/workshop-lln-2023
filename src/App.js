import logo from './turkey.png';
import './App.css';
import { Button } from '@mui/material';
import React, { useState } from 'react';

function App() {
  const[count, setCount]= useState(0);
  function Increment(){
   return(
    <button onClick={() => {
      setCount(prevVal => (prevVal+1));
    }}>Increment</button>);
  }
  function Decrement(){ 
   return(
    <button onClick={() => {
      setCount(prevVal => (prevVal-1));
    }}>Decrement</button>);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Happy Early Turkey Day</h1>
        <p>
         This is my first website
         
        </p>
        <h1>{count}</h1>
        <Increment/>
        <Decrement/>
      </header>
      <body>
        This is the body
      </body>
      <footer className='App-Footer'>
        This is the footer
      </footer>
    </div>
  );
}

export default App;
