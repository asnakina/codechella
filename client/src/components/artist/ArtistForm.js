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
    validate: {
      urlState: '',
      artistState: '',
      descState: ''
    },
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
    const urlVal = /^(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?$/
    const { validate } = this.state
    if (urlVal.test(e.target.value)) {
      validate.urlState = 'good'
    } else {
      validate.urlState = 'bad'
    }
    this.setState({
       validate })
  }



  submitForm(e) {
    e.preventDefault();
    //let { name, description, img_url } = this.state;
    let timeslot = null;
    let url = this.state.urlState
    let artist = this.state.artistState
    let desc = this.state.descState

    // let form = {name, description, img_url, timeslot};
    // const resp = serv
  }

  render() {
    const { url, artist, desc } = this.state;
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
                value={ artist }
                good={ this.state.validName === 'good' }
                good={ this.state.validName === 'bad' }
                onChange={ (e) => {
                            this.handleChange(e)
                            this.validateArtist(e)
                          } }
              />
            <FormFeedback good>
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
                value={ desc }
                good={ this.state.description.length > 20 }
                bad={ this.state.description.length < 20 }
                onChange={this.handleChange}
              />
            <FormFeedback good>
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
                type= "name"
                name= "img_url"
                id= "artistImageURL"
                placeholder= "http://pics.com/img/happy.jpg"
                value={ url }
                good={ this.state.validate.urlState === 'good' }
                bad={ this.state.validate.urlState === 'bad' }
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateURL(e);
                }}
              />
            <FormFeedback good>
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
