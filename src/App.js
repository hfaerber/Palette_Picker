import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import Project from './components/Project/Project';
import { getProjects } from './apiCalls.js';
import './App.scss';

const App = () => {
  const [user, setUser] = useState('');
  const [projects, setProjects] = useState([]);
  const homeProps = {user, setUser, projects, setProjects};

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.projects);
      } catch(error) {
          console.log(error);
      }
    };
    fetchProjects();
  }, [user]);

  return (
    <div className="App">
      <Route exact path='/' render={() => <Login setUser={setUser}/>} />
      <Route exact path='/home' render={() => projects.length ? <Home {...homeProps}/> : <Loader />} />
      <Route path='/projects/:id' render={({ match }) => {
              const { id } = match.params;
              return <Project id={id} {...homeProps} /> }} />
    </div>
  )
}

export default App;
