import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

export default class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: true

    }

  }



  render() {
    return (
      <div>
      Please Register
      <RegisterForm />
      </div>
    )
  }
}
