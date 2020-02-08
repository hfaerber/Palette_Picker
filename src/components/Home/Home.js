import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addProject, getProjects } from '../../apiCalls.js';
import './Home.scss';

export const handleProjectSubmit = async projectHooks => {
  if (projectHooks.newProject) {
    try {
      const projectID = await addProject(projectHooks.newProject);
      const newProject =  await getProjects(projectID.id);
      projectHooks.setProjects([...projectHooks.projects, newProject]);
      projectHooks.setNewProject('');
    } catch(error) {
        console.log(error);
        projectHooks.setError('There was a problem creating your project.')
    }
  } else {
      projectHooks.setError('Please enter a name.');
  }
}

const Home = props => {
  const [newProject, setNewProject] = useState('');
  const [error, setError] = useState('');
  const { user, setUser, projects, setProjects } = props;
  const addProjectHooks = {newProject, setNewProject, projects, setProjects, setError};
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
            <span className="add-project-error">{error}</span>
            <div className="add-project-wrapper">
              <input className="add-project" type="text" placeholder="New Project" onChange={e => {
                setNewProject(e.target.value);
                setError('');
              }} value={newProject}/>
              <img className="add-icon" src={require("../../images/icons/add-button.svg")} onClick={() => handleProjectSubmit(addProjectHooks)}/>
            </div>
          </div>
          <div className="small-project-wrapper">
            {projectNodes}
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </div>
  )
}

export default Home;
