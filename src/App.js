import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Count from './Components/Count'
import Child from './Components/child'
import Parent from './Components/Parent'
import IfElseRendering from './Components/IfElseRendering'
import Element from './Components/ElementVariable'
import ShortCircuit from './Components/ShortCircuit'
import Condition from './Components/Conditional'
import Namelist from './Components/NameList'
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greet name ="Teja"></Greet>
      <Welcome name ="Sai"></Welcome>
      <Message/>
      <Parent/>
      <Count/>
      <IfElseRendering/>
      <Element/>
      <ShortCircuit/>
      <Condition/>
      <Namelist/>
    </div>
  );
}

export default App;
