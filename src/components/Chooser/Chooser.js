import React, { useState } from 'react';
import './Chooser.scss';

export const Chooser = props => {
  const [colorOne, setColorOne] = useState({color: '', locked: false});
  const [colorTwo, setColorTwo] = useState({color: '', locked: false});
  const [colorThree, setColorThree] = useState({color: '', locked: false});
  const [colorFour, setColorFour] = useState({color: '', locked: false});
  const [colorFive, setColorFive] = useState({color: '', locked: false});
  const [selectedProject, selectProject] = useState('');
  const [paletteName, setPaletteName] = useState('');
  const projectOptions = props.projects.map(project => {
    return (
      <option key={project.id} id={project.id} value={project.name}>{project.name}</option>
    )
  });
  const handleSelect = ({ target }) => {
    const index = target.selectedIndex;
    const id = target.options[index].id;
    selectProject(id);
  }

  return (
    <div className="chooser">
      <h4>Create a palette:</h4>
      <section className="picker-wrapper">
        <div className="color-picker-wrapper">
          <button className="randomize">Randomize</button>
          <div className="palette-wrapper">

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colorOne.color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colorOne.color} minLength="6" maxLength="6" id="0" onChange={e => setColorOne({color: e.target.value, locked: false})}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colorTwo.color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colorTwo.color} minLength="6" maxLength="6" id="1" onChange={e => setColorTwo({color: e.target.value, locked: false})}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colorThree.color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colorThree.color} minLength="6" maxLength="6" id="2" onChange={e => setColorThree({color: e.target.value, locked: false})}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colorFour.color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colorFour.color} minLength="6" maxLength="6" id="3" onChange={e => setColorFour({color: e.target.value, locked: false})}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colorFive.color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colorFive.color} minLength="6" maxLength="6" id="4" onChange={e => setColorFive({color: e.target.value, locked: false})}/>
            </div>

          </div>
        </div>
        <div className="color-form-wrapper">
          <select className="project-selector" onChange={e => handleSelect(e)}>
            {projectOptions}
          </select>
          <input className="palette-name" placeholder="Name" value={paletteName} onChange={e => setPaletteName(e.target.value)}/>
          <button className="add-palette">Create</button>
        </div>
      </section>
    </div>
  )
}

export default Chooser;
