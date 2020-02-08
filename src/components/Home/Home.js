import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addProject } from '../../apiCalls.js';
import './Home.scss';

const Home = props => {
  const [newProject, setNewProject] = useState('');
  const { user, setUser, projects, setProjects } = props;
  const projectNodes = projects.map(project => {
    return (
      <div className="project-button" key={project.id} id={project.id}>
        <img className="project-icon" src={require("../../images/icons/pantone.svg")}/>
        <span className="project-name">{project.name}</span>
      </div>
    )
  });

  return (
    <div className="home">
      <nav className="home-nav">
        <h2>Palette Picker</h2>
        <Link className="sign-out" to="/" onClick={() => setUser({})}>Sign Out</Link>
      </nav>
      <section className="project-section">
        <div className="user-container">
          <img className="profile-icon" src={require("../../images/icons/user.svg")}/>
          <span className="username-label">{user}</span>
        </div>
        <div className="projects-container">
          <div className="projects-header">
            <h3>Your Projects:</h3>
            <div className="add-project-wrapper">
              <input className="add-project" type="text" placeholder="New Project" onChange={e => setNewProject(e.target.value)}/>
              <img className="add-icon" src={require("../../images/icons/add-button.svg")}/>
            </div>
          </div>
          <div className="small-project-wrapper">
            {projectNodes}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
