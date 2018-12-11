import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: true

    }

  }



  render() {
    return (
      <div>
      Please Login
      <LoginForm />

      Please Register
      <RegisterForm />
      </div>
    )
  }
}
