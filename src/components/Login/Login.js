import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  render() {
    return (
      <div className='Login'>
      </div>
    )
  }
}
export default Login;
