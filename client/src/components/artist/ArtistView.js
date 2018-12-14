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
          artists={this.props.artists.filter(artist => artist.created_by <= 3)}
          onChange={this.handleModal}
          favoriteArtist={this.props.favoriteArtist}
          unfavoriteArtist={this.props.unfavoriteArtist}
          userArtists={this.props.userArtists}
          creator={this.props.creator}
          delete={this.props.delete}/> :
        <ArtistModal
          artist={this.state.artist}
          reset={this.resetModal}/>}
      <h2 className="header">WILDCARDS</h2>
        <ArtistList
          artists={this.props.artists.filter(artist => artist.created_by > 3)}
          onChange={this.handleModal}
          favoriteArtist={this.props.favoriteArtist}
          unfavoriteArtist={this.props.unfavoriteArtist}
          userArtists={this.props.userArtists}
          creator={this.props.creator}
          delete={this.props.delete}/>
          <ArtistForm
            artists={this.props.artists}
            submit={this.props.submit}
            />
      </div>
    )
  }
}
