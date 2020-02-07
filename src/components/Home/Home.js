import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = props => {
  return (
    <div className="home">
      <nav className="home-nav">
        <h2>Palette Picker</h2>
        <Link className="sign-out" to="/" onClick={() => props.setUser({})}>Sign Out</Link>
      </nav>
      <section className="project-section">
        <div className="user-container">
          <img className="profile-icon" src={require("../../images/icons/user.svg")}/>
          <span className="username-label">{props.user}</span>
        </div>
        <div className="projects-container">
        </div>
      </section>
    </div>
  )
}

export default Home;
