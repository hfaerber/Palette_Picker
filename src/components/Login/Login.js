import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="login">
      <h1>Palette Picker</h1>
      <span className="form-label">Please sign in to start pickin' palettes:</span>
      <form className="login-form">
        <input className="username" type="text" placeholder="Username..." value={username} onChange={event => setUsername(event.target.value)}/>
        <input className="password" type="password" placeholder="Password..." value={password} onChange={event => setPassword(event.target.value)}/>
        <button type="submit" className="login-submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login;
