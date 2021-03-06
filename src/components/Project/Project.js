import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getPalettes, removeItem } from '../../apiCalls';
import './Project.scss';
import PropTypes from 'prop-types';

export const handleDelete = async (id, item, hooks) => {
  const response = await removeItem(id, item);
  if (item === 'palette') {
    const updatedPalettes = hooks.palettes.filter(palette => palette.id !== id);
    hooks.setPalettes(updatedPalettes);
  } else {
    const updatedProjects = hooks.projects.filter(project => Number(project.id) !== Number(id));
    hooks.setProjects(updatedProjects);
    hooks.tryHistoryPush();
  }
}

export const Project = props => {
  const { id, user, setUser, projects, setProjects } = props;
  const project = projects.find(project => project.id === Number(id));
  const [palettes, setPalettes] = useState([]);
  const tryHistoryPush = () => {props.history.push('/home')};
  const removeItemHooks = {palettes, setPalettes, projects, setProjects, tryHistoryPush}

  useEffect(() => {
    const fetchPalettes = async () => {
      try {
        const response = await getPalettes(id);
        setPalettes(response.palettes);
      } catch(error) {
          console.log(error);
      }
    };
    fetchPalettes();
  }, []);

  const formatPalettes = palettes.map(pal => {
      return (
          <section className='proj-palette' key={pal.id} id={pal.id}>
            <h3 className='proj-palette-name'>{pal.name}</h3>
            <div className='color-box-container'>
              <div className='color_box' style={{backgroundColor: pal.color_one}}></div>
              <div className='color_box' style={{backgroundColor: pal.color_two}}></div>
              <div className='color_box' style={{backgroundColor: pal.color_three}}></div>
              <div className='color_box' style={{backgroundColor: pal.color_four}}></div>
              <div className='color_box' style={{backgroundColor: pal.color_five}}></div>
            </div>
            <img alt="Trash Icon" className="trash-icon"
              src={require("../../images/icons/delete.svg")}
              onClick={() => handleDelete(pal.id, 'palette', removeItemHooks)}/>
          </section>
        )
      });

  return (
    <div className='project-page'>
      <nav className="project-nav">
        <h2>Palette Picker</h2>
        <div className='nav-buttons'>
        <Link className="back-arrow" to="/home">
          <img alt="Back Arrow Icon" className="back-arrow-icon"
            src={require("../../images/icons/down-arrow.svg")}/></Link>
          <Link className="back-button" to="/home">
          Back </Link>
          <Link className="sign-out" to="/" onClick={() => setUser('')}>Sign Out</Link>
        </div>
      </nav>
      <div className='project-div'>
        <h2 id='project-name-display'>{project && project.name}</h2>
        <button className='delete-project-button'
          onClick={() => handleDelete(id, 'project', removeItemHooks)}>
          Delete Project</button>
      </div>
      {!palettes.length && <h3>No palettes yet!</h3>}
      <div className='palettes-container'>
        {palettes.length > 0 && formatPalettes}
      </div>
    </div>
  )
}

export default withRouter(Project);

Project.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
  setUser: PropTypes.func,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};
