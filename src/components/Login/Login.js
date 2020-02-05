import React from 'react';
import './Login.scss';

const Login = () => {
    return (
      <div className="login">
        <h1>Palette Picker</h1>
        <span className="form-label">Please sign in to start pickin' palettes:</span>
        <form className="login-form">
          <input className="username" type="text" placeholder="Username..."/>
          <input className="password" type="password" placeholder="Password..."/>
          <button type="submit" className="login-submit">Sign In</button>
        </form>
      </div>
    )
}

export default Login;
