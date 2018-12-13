import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import serv from '../../services/apiservices.js';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  // componentDidMount = async () => {
  //   await this.getCurrentUser();
  // }

  async login(data) {
    this.props.login(data);
  }

  async register(data) {
    this.props.register(data);
  }

  render() {
    return (
      <div className="loginview-box">
      <LoginForm login={this.login}/>
      <RegisterForm register={this.register}/>
      </div>
    )
  }
}
