import React, { Component } from 'react';
import ArtistList from './ArtistList';

export default class ArtistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: true
    }
  }
  
  render() {
    return (
      <div>
      {this.state.list ? <ArtistList
        artists = {this.props.artists}/> : null}
      </div>
    )
  }
}
