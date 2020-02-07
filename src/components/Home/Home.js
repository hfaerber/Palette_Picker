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
    </div>
  )
}

export default Home;
