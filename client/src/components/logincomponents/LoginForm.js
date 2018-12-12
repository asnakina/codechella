import React, { Component } from 'react';
import { Container, Col, Form, FormFeedback, FormGroup, FormText, Label, Input, Button } from 'reactstrap';
import './LoginView.css';

export default class LoginForm extends Component {
  constructor(props) {
   super(props);
     this.state = {
     'email': '',
     'password': '',
     validate: {
       emailState: '',
     },
   }
   this.handleChange = this.handleChange.bind(this);
 }

 validateEmail(e) {
   const emailVal = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const { validate } = this.state
     if (emailVal.test(e.target.value)) {
       validate.emailState = 'good'
     } else {
       validate.emailState = 'bad'
     }
     this.setState({ validate })
   }

validatePassword(e) {
  const pwVal = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
const { validate } = this.state
  if (pwVal.test(e.target.value)) {
    validate.passwordState = 'good'
  } else {
    validate.passwordState = 'bad'
  }
  this.setState({ validate })
}

 handleChange = async (event) => {
   const { target } = event;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const { name } = target;
   await this.setState({
     [ name ]: value,
   });
 }

 submitForm(e) {
   e.preventDefault();
 }

 render() {
   const { email, password } = this.state;
   return (
     <Container className="login-box">
       <h2>Sign In</h2>
       <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
         <Col>
           <FormGroup>
             <Label>Username</Label>
             <Input
               type="email"
               name="email"
               id="exampleEmail"
               placeholder="myemail@email.com"
               value={ email }
               valid={ this.state.validate.emailState === 'good' }
               invalid={ this.state.validate.emailState === 'bad' }
               onChange={ (e) => {
                           this.validateEmail(e)
                           this.handleChange(e)
                         } }
             />

             <FormFeedback invalid>
               Invalid Login
             </FormFeedback>
             <FormText></FormText>
           </FormGroup>
         </Col>
         <Col>
           <FormGroup>
             <Label for="examplePassword">Password</Label>
             <Input
               type="password"
               name="password"
               id="examplePassword"
               placeholder="********"
               value={ password }
               valid={ this.state.validate.passwordState === 'good' }
               invalid={ this.state.validate.passwordState === 'bad' }
               onChange={ (e) => {
                           this.validatePassword(e)
                           this.handleChange(e)
                         } }
           />

           <FormFeedback invalid>
             Incorrect Login
           </FormFeedback>
           <FormText> </FormText>
           </FormGroup>
         </Col>
         <Button>Submit</Button>
     </Form>
     </Container>
   );
 }
}
