import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import serv from '../../services/apiservices.js';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: ''
      },
      userView: 'register',
      loggedIn: false,
      token: null,
      currentUser: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.buildHeaders = this.buildHeaders.bind(this);
  }



  buildHeaders() {
    const { token } = this.state;
    return {
        'Authorization': `Bearer ${token}`
    };
  }

  async getCurrentUser() {
    try {
      const headers = this.buildHeaders();
      const user = await serv.getUser(headers);
      this.setState({
        loggedIn: true,
        currentUser: user
      });
    } catch(e) {
      console.log(e);
    }
  }

  // componentDidMount = async () => {
  //   await this.getCurrentUser();
  // }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  async login(data) {
    const headers = this.buildHeaders();
    const { username, password } = data;
    const resp = await serv.loginUser(
      {username, password}, headers
    );
    const token = resp.token;
    this.setState({token})
    this.getCurrentUser();
  }
  async register(ev) {
    ev.preventDefault();
    const resp = await serv.registerUser();
    this.setState({token: resp.data.token});
    this.getCurrentUser();
  }

  render() {
    return (
      <div className="loginview-box">
      <LoginForm login={this.login}/>
      <RegisterForm />
      </div>
    )
  }
}
