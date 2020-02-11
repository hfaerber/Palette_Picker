import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { getPalettes } from '../../apiCalls';
import './Project.scss';

export const Project = props => {
  const { id, user, setUser, projects, setProjects } = props;
  const [palettes, setPalettes] = useState('');
  let palettesToDisplay;

  useEffect(() => {
    const fetchPalettes = async () => {
      try {
        const response = await getPalettes(id);
        await setPalettes(response.palettes);
        formatPalettes();
      } catch(error) {
          console.log(error);
      }
    };
    fetchPalettes();
  }, []);

  const formatPalettes = () => {
    console.log('palettes', palettes)
    palettes.map(palette => {
      console.log('palette.name');
    })
  };
  // fetch palettes for selected project
  // map over them and return

  const htmlForPalette =
    <section className='proj-palette'>
      <h3 className='proj-palette-name'>Nature</h3>
      <div className='color-box-container'>
        <div className='color_box'></div>
        <div className='color_box'></div>
        <div className='color_box'></div>
        <div className='color_box'></div>
        <div className='color_box'></div>
      </div>
      <button className='trash-button'>🗑</button>
    </section>;

    // return (
    //   <section className='proj-palette'>
    //   <h3 className='proj-palette-name'>{palette.name}</h3>
    //   <div className='color-box-container'>
    //     <div className='color_box' style={{backgroundColor: palette.color_one}}></div>
    //     <div className='color_box' style={{backgroundColor: palette.color_two}}></div>
    //     <div className='color_box' style={{backgroundColor: palette.color_three}}></div>
    //     <div className='color_box' style={{backgroundColor: palette.color_four}}></div>
    //     <div className='color_box' style={{backgroundColor: palette.color_five}}></div>
    //   </div>
    //   <button className='trash-button'>🗑</button>
    // </section>
    // )

  return (
    <div className='project-page'>
      <nav className="project-nav">
        <h2>Palette Picker</h2>
        <BrowserRouter>
        <Link className="back-button" to="/">Back </Link>
        <Link className="sign-out" to="/" onClick={() => setUser({})}>Sign Out</Link>
        </BrowserRouter>
      </nav>
      <div className='project-div'>
        <h2>Project 1</h2>
        <button className='delete-project-button'>Delete Project</button>
      </div>
      <div className='palettes-container'>
        <section className='proj-palette'>
          <h3 className='proj-palette-name'>Nature</h3>
          <div className='color-box-container'>
            <div className='color_box'></div>
            <div className='color_box'></div>
            <div className='color_box'></div>
            <div className='color_box'></div>
            <div className='color_box'></div>
          </div>
          <button className='trash-button'>🗑</button>
        </section>
        <section className='proj-palette'>
          <h3 className='proj-palette-name'>Nature</h3>
          <div className='color-box-container'>
            <div className='color_box'></div>
            <div className='color_box'></div>
            <div className='color_box'></div>
            <div className='color_box'></div>
            <div className='color_box'></div>
          </div>
          <button className='trash-button'>🗑</button>
        </section>
      </div>
    </div>
  )
}

export default Project;
