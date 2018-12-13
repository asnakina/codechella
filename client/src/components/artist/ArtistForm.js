import React, { Component } from 'react';
import { Container, Col, Form, FormFeedback, FormGroup, FormText, Label, Input, Button } from 'reactstrap';
import serv from '../../services/apiservices.js';

export default class ArtistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      img_url: '',
      validName: '',
      validURL: ''
    }
    this.validateArtist = this.validateArtist.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateArtist(e) {
    let { value } = e.target;
    let validName = this.props.artists.every(artist => artist.name.toLowerCase() !== value.toLowerCase());
    this.setState({ validName });
  }

  validateURL(e) {
    let { value } = e.target;
    let regex = /.jpg|.gif|.jpeg|.png|.tif/gi
    let validURL = regex.test(value);
    this.setState({ validURL });
  }

  submitForm(e) {
    e.preventDefault();
    let { name, description, img_url } = this.state;
    let timeslot = null;
    let form = {name, description, img_url, timeslot};
    const resp = serv
  }

  render() {
    const { name, description, img_url } = this.state;
    return (
      <Container className="reg-box">
        <h2>Vote on Wildcard Artists!</h2>
        <Form className="form" onSubmit={this.submitForm}>
          <Col>
            <FormGroup>
              <Label>Artist</Label>
              <Input
                type="name"
                name="name"
                id="artistName"
                placeholder="Kanye West"
                value={ name }
                valid={ this.state.validName === true }
                invalid={ this.state.validName === false }
                onChange={ (e) => {
                            this.handleChange(e)
                            this.validateArtist(e)
                          } }
              />
              <FormFeedback valid>
                Rock on! This artist isn't playing this year.
              </FormFeedback>
              <FormFeedback>
                Sorry, they're already playing.
              </FormFeedback>
              <FormText>Please enter an artist you'd like to see this year.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="name"
                name="description"
                id="artistDescription"
                placeholder="Kanye West is a Chicago born rapper and performer."
                value={ description }
                valid={ this.state.description.length > 20 }
                invalid={ this.state.description.length < 20 }
                onChange={this.handleChange}
              />
              <FormFeedback valid>
                Very descriptive.
              </FormFeedback>
              <FormFeedback>
                Add a little more.
              </FormFeedback>
              <FormText>Give a short description of them.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Image URL</Label>
              <Input
                type="name"
                name="img_url"
                id="artistImageURL"
                placeholder="https://fashionista.com/.image/t_share/MTI4MDQxNzYyODY1MzIyNDYy/463009592jpg.jpg"
                value={ img_url }
                valid={ this.state.validURL === true }
                invalid={ this.state.validURL === false }
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateURL(e);
                }}
              />
              <FormFeedback valid>
                That's an image!
              </FormFeedback>
              <FormFeedback>
                That's not an image.
              </FormFeedback>
              <FormText>Give a short description of them.</FormText>
            </FormGroup>
          </Col>
          <Button>Submit</Button>
      </Form>
      </Container>
    )
  }
}
