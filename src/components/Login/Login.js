import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

export const handleChange = (event, setError, setUsername, setPassword) => {
  const { id, value } = event.target;
  setError('');
  if (id === 'username') {
    setUsername(value);
  } else {
    setPassword(value);
  }
};

export const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (validateSubmit()) {
      props.setUser(username);
      props.history.push('/home');
    } else {
      setError('Both fields are required.');
    }
  };

  const validateSubmit = () => {
    return username && password ? true : false
  };

  return (
    <div className="login">
      <h1>Palette Picker</h1>
      <span className="form-label">Please sign in to start pickin' palettes:</span>
      <form className="login-form" onSubmit={event => handleSubmit(event)}>
        <input className="username" id="username" type="text" placeholder="Username..." value={username} onChange={e => handleChange(e, setError, setUsername, setPassword)} maxlength="32"/>
        <input className="password" id="password" type="password" placeholder="Password..." value={password} onChange={e => handleChange(e, setError, setUsername, setPassword)} maxlength="32"/>
        <button type="submit" className="login-submit">Sign In</button>
      </form>
      <span className="login-error">{error}</span>
    </div>
  )
}

export default withRouter(Login);
