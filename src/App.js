import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <Login />} />
      </div>
    )
  }
}

export default App;
