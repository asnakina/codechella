import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import serv from '../../services/apiservices.js';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      formData: {
        username: '',
        password: ''
      },
      userView: 'register',
      loggedIn: false,
      token: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }



  buildHeaders() {
    const { token } = this.state;
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
  }

  async getCurrentUser() {
    try {
      const headers = this.buildHeaders();
      const user = await serv.getUsers({...headers});
      this.setState({
        loggedIn: true,
        currentUser: user.data.user
      });
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount = async () => {
    await this.getCurrentUser();
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  async login(ev) {
    ev.preventDefault();
    const { username, password } = this.state.formData;
    const resp = await serv.loginUser(
      {username, password}
    );

    this.setState({token: resp.data.token})
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

      <LoginForm />
      <RegisterForm />
      </div>
    )
  }
}
