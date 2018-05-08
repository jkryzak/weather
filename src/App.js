import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <Form />
      </div>
    );
  }
}

export default App;
