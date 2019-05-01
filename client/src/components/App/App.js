import React from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Nav from '../Navigation/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
    <Nav />
    <Login /> 
    <Signup />
    </div>
  );
}

export default App;
