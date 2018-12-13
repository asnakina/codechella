import React, { Component } from 'react';
import { Container, Col, Form, FormFeedback, FormGroup, FormText, Label, Input, Button } from 'reactstrap';


export default class VendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      img_url: '',
      urlState: '',
      vendorState: '',
      descState: ''
  }
    this.validateVendor = this.validateVendor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateURL = this.validateURL.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateVendor(e) {
    let { value } = e.target;
    let vendorState = this.props.vendors.every(vendor => vendor.name.toLowerCase() !== value.toLowerCase());
    vendorState ? this.setState({ vendorState: 'good' }) : this.setState({ vendorState: 'bad' });
  }

  validateDescription(e) {
    this.state.description.length > 20 ?
    this.setState({descState: 'good'}):
    this.setState({descState: 'bad'});
  }

  validateURL(e) {
    const urlVal = /^(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?$/
    if (urlVal.test(e.target.value) && e.target.value.length < 256) {
      this.setState({urlState: 'good'});
    } else {
      this.setState({urlState: 'bad'});
    }
  }

  submitForm(e) {
    e.preventDefault();
    let { name, description, img_url } = this.state;
    if (this.state.vendorState === 'good' &&
        this.state.descState === 'good' &&
        this.state.urlState === 'good') {
          this.props.submit({name, description, img_url});
    }
  }

  render() {
    const { url, vendor, desc } = this.state;
    return (
      <Container className="reg-box">
        <h2>Vote on Wildcard vendors!</h2>
          <Form className="form" onSubmit={this.submitForm}>
            <Col>
              <FormGroup>
                <Label>vendor</Label>
                 <Input
                    type="name"
                    name="name"
                    id="vendorName"
                    placeholder="Chipotle"
                    value={ vendor }
                    valid={ this.state.vendorState === 'good' }
                    invalid={ this.state.vendorState === 'bad' }
                    onChange={ (e) => {
                            this.handleChange(e)
                            this.validateVendor(e)
                          }
                      }
                 />
                 <FormFeedback valid>
                   Rock on! This vendor isn't playing this year.
                 </FormFeedback>
                 <FormFeedback invalid>
                    Sorry, they're already playing.
                 </FormFeedback>
                 <FormText>Please enter an vendor you'd like to see this year.</FormText>
                 </FormGroup>
                 </Col>
                 <Col>
                 <FormGroup>
                 <Label>Description</Label>
                 <Input
                     type="name"
                     name="description"
                     id="vendorDescription"
                     placeholder="Burritos with fresh, organic ingredients."
                     value={ desc }
                     valid={ this.state.descState === 'good' }
                     invalid={ this.state.descState === 'bad'}
                     onChange={ (e) => {
                            this.handleChange(e)
                            this.validateDescription(e)
                          }
                      }
                 />
                <FormFeedback valid>
                   Very descriptive.
                 </FormFeedback>
                 <FormFeedback invalid>
                   Add a little more.
                 </FormFeedback>
                 <FormText>Give a short description of them.</FormText>
                 </FormGroup>
                 </Col>
                 <Col>
                <FormGroup>
                <Label>Image URL</Label>
                <Input
                     type= "name"
                     name= "img_url"
                     id= "vendorImageURL"
                     placeholder= "http://pics.com/img/happy.jpg"
                     value={ url }
                     valid={ this.state.urlState === 'good' }
                     invalid={ this.state.urlState === 'bad' }
                     onChange={(e) => {
                              this.handleChange(e);
                              this.validateURL(e);
                           }
                       }
                  />
                  <FormFeedback valid>
                     That's an image!
                  </FormFeedback>
                  <FormFeedback invalid>
                     That's not an image.
                  </FormFeedback>
               <FormText>Add an image!</FormText>
             </FormGroup>
           </Col>
         <Button>Submit</Button>
      </Form>
    </Container>
   )
 }
}
