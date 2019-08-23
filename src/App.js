import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Count from './Components/Count'
import Parent from './Components/Parent'
import IfElseRendering from './Components/IfElseRendering'
import Element from './Components/ElementVariable'
import ShortCircuit from './Components/ShortCircuit'
import Condition from './Components/Conditional'
import Form from './Components/Form'
import Namelist from './Components/NameList'
function App() {
  return (
    <div className='App'>
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
      <Form/>
    </div>
  );
}

export default App;
