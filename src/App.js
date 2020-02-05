import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.scss';

const App = () => {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Route exact path='/' render={() => <Login setUser={setUser}/>} />
      <Route exact path='/home' render={() => <Home />} />
    </div>
  )
}

export default App;
