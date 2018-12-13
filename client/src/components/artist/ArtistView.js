import React, { Component } from 'react';
import ArtistList from './ArtistList';
import ArtistModal from './ArtistModal';
import ArtistForm from './ArtistForm';
import './ArtistList.css';

export default class ArtistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null
    }
    this.handleModal = this.handleModal.bind(this);
    this.resetModal = this.resetModal.bind(this);
  }

  handleModal(e) {
    let { id } = e.target.parentNode;
    console.log(e.target.parentNode.id);
    const artist = this.props.artists.filter(artist => artist.name.toLowerCase() === id.toLowerCase())[0];
    this.setState({artist});
  }

  resetModal() {
    this.setState({artist: null});
  }

  render() {
    return (
      <div>
      <h2 className="header">LINEUP</h2>
      {!this.state.artist ?
        <ArtistList
          artists={this.props.artists}
          onChange={this.handleModal}/> :
        <ArtistModal
          artist={this.state.artist}
          reset={this.resetModal}/>}
      <h2 className="header">WILDCARDS</h2>
      <ArtistForm
        artists={this.props.artists}
        submitForm={this.submitForm}
        />

      </div>
    )
  }
}
