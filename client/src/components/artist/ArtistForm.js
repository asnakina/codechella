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
      urlState: '',
      artistState: '',
      descState: ''
  }
    this.validateArtist = this.validateArtist.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateURL = this.validateURL.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateArtist(e) {
    let { value } = e.target;
    let artistState = this.props.artists.every(artist => artist.name.toLowerCase() !== value.toLowerCase());
    artistState ? this.setState({ artistState: 'good' }) : this.setState({ artistState: 'bad' });
  }

  validateDescription(e) {
    this.state.description.length > 20 ?
    this.setState({descState: 'good'}):
    this.setState({descState: 'bad'});
  }

  validateURL(e) {
    const urlVal = /^(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?$/
    const { urlState } = this.state;
    if (urlVal.test(e.target.value)) {
      this.setState({urlState: 'good'});
    } else {
      this.setState({urlState: 'bad'});
    }
  }



  submitForm(e) {
    e.preventDefault();
    let timeslot = null;
    let { name, description, img_url } = this.state;
    if (this.state.artistState === 'good' &&
        this.state.descState === 'good' &&
        this.state.urlState === 'good') {
          console.log('success!');
          // this.props.submit({artist, description, img_url, timeslot});
    }
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
                valid={ this.state.artistState === 'good' }
                invalid={ this.state.artistState === 'bad' }
                onChange={ (e) => {
                            this.handleChange(e)
                            this.validateArtist(e)
                          } }
              />
            <FormFeedback valid>
                Rock on! This artist isn't playing this year.
              </FormFeedback>
              <FormFeedback invalid>
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
                valid={ this.state.descState === 'good' }
                invalid={ this.state.descState === 'bad'}
                onChange={ (e) => {
                            this.handleChange(e)
                            this.validateDescription(e)
                          } }
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
                id= "artistImageURL"
                placeholder= "http://pics.com/img/happy.jpg"
                value={ url }
                valid={ this.state.urlState === 'good' }
                invalid={ this.state.urlState === 'bad' }
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateURL(e);
                }}
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
