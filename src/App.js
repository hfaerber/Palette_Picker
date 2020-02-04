import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';

const App = () => {
    return (
      <div className="App">
        <Route exact path='/' render={() => <Login />} />
      </div>
    )
}

export default App;
