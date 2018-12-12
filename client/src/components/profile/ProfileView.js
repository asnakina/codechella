import React, { Component } from 'react';
import ArtistList from '../artist/ArtistList';
import VendorList from '../vendor/VendorList';

export default class ProfileView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h3>ProfileView</h3>
      <ArtistList />
      <VendorList />
    )
  }
}
