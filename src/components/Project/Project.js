import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { addPalette } from '../../apiCalls';
import './Project.scss';

export const Project = props => {
  const { user, setUser, projects, setProjects } = props;

  return (
    <div>
      <nav className="home-nav">
        <h2>Palette Picker</h2>
        <BrowserRouter>
        <Link className="back-button" to="/">Back </Link>
        <Link className="sign-out" to="/" onClick={() => setUser({})}>Sign Out</Link>
        </BrowserRouter>
      </nav>
    </div>
  )
}

export default Project;
