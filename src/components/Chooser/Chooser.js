import React, { useState } from 'react';
import './Chooser.scss';

export const Chooser = props => {
  const [colors, setColors] = useState([
    {color: 'FFFFFF', locked: false},
    {color: 'FFFFFF', locked: false},
    {color: 'FFFFFF', locked: false},
    {color: 'FFFFFF', locked: false},
    {color: 'FFFFFF', locked: false}
  ]);
  return (
    <div className="chooser">
      <h4>Create a palette:</h4>
      <section className="picker-wrapper">
        <div className="color-picker-wrapper">
          <button className="randomize">Randomize</button>
          <div className="palette-wrapper">

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colors[0].color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colors[0].color}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colors[1].color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colors[1].color}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colors[2].color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colors[2].color}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colors[3].color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colors[3].color}/>
            </div>

            <div className="color-panel-wrapper">
              <div className="color-panel" style={{backgroundColor: `#${colors[4].color}`}}>
              </div>
              <img className="lock" src={require('../../images/icons/open-padlock.svg')}/>
              <input className="color-input" value={colors[4].color}/>
            </div>

          </div>
        </div>
        <div className="color-form-wrapper">
        </div>
      </section>
    </div>
  )
}

export default Chooser;
