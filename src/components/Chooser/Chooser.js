import React, { useState } from 'react';
import './Chooser.scss';

export const Chooser = props => {

  const [colors, setColors] = useState([
    {number: 1, color: '', locked: false},
    {number: 2, color: '', locked: false},
    {number: 3, color: '', locked: false},
    {number: 4, color: '', locked: false},
    {number: 5, color: '', locked: false}
  ]);

  const [selectedProject, selectProject] = useState('1');
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
  };

  const handleColorChange = ({ target }) => {
    const { value, id } = target;
    const selectedColor = colors.find(color => color.number === parseInt(id));
    selectedColor.color = value;
    const unselectedColors = colors.filter(color => color.number !== parseInt(id));
    setColors([selectedColor, ...unselectedColors]);
  };

  const findColor = number => {
    return colors.find(color => color.number === number).color;
  };

  const generateRandomHex = () => {
    const randomHex = Math.floor(Math.random()*16777215).toString(16);
    return randomHex
  };

  const randomizeColors = () => {
    return colors.map(colorObj => {
      let { color, number, locked } = colorObj;
      if (!locked) {
        return {number, color: generateRandomHex(), locked}
      } else {
        return colorObj
      }
    })
  };

  const toggleLock = num => {
    return colors.map(colorObj => {
      let { color, number, locked } = colorObj;
      if (number === num) {
        return {number, color, locked: !locked}
      } else {
        return colorObj
      }
    })
  };

  const findLockImage = num => {
    return colors.find(color => color.number === num).locked
  };

  return (
    <div className="chooser">
      <h4>Create a palette:</h4>
      <section className="picker-wrapper">
        <div className="color-picker-wrapper">
          <button className="randomize" onClick={() => setColors(randomizeColors())}>Randomize</button>
          <div className="palette-wrapper">

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${findColor(1)}`}}>
              </div>
              <img className="lock" src={!findLockImage(1) ? require('../../images/icons/open-padlock.svg') : require('../../images/icons/lock.svg')} onClick={() => setColors(toggleLock(1))}/>
              <input className="color-input" value={findColor(1)} minLength="6" maxLength="6" id="1" onChange={e => handleColorChange(e)}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${findColor(2)}`}}>
              </div>
              <img className="lock" src={!findLockImage(2) ? require('../../images/icons/open-padlock.svg') : require('../../images/icons/lock.svg')} onClick={() => setColors(toggleLock(2))}/>
              <input className="color-input" value={findColor(2)} minLength="6" maxLength="6" id="2" onChange={e => handleColorChange(e)}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${findColor(3)}`}}>
              </div>
              <img className="lock" src={!findLockImage(3) ? require('../../images/icons/open-padlock.svg') : require('../../images/icons/lock.svg')} onClick={() => setColors(toggleLock(3))}/>
              <input className="color-input" value={findColor(3)} minLength="6" maxLength="6" id="3" onChange={e => handleColorChange(e)}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${findColor(4)}`}}>
              </div>
              <img className="lock" src={!findLockImage(4) ? require('../../images/icons/open-padlock.svg') : require('../../images/icons/lock.svg')} onClick={() => setColors(toggleLock(4))}/>
              <input className="color-input" value={findColor(4)} minLength="6" maxLength="6" id="4" onChange={e => handleColorChange(e)}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${findColor(5)}`}}>
              </div>
              <img className="lock" src={!findLockImage(5) ? require('../../images/icons/open-padlock.svg') : require('../../images/icons/lock.svg')} onClick={() => setColors(toggleLock(5))}/>
              <input className="color-input" value={findColor(5)} minLength="6" maxLength="6" id="5" onChange={e => handleColorChange(e)}/>
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
