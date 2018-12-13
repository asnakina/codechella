import React, { Component } from 'react';


export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      userView: 'ProfileView',
    }
  }
  render() {
    return (
      <div>
      <h3>ProfileView</h3>

      </div>
    )
  }
}
// import ArtistList from '../artist/ArtistList';
// import VendorList from '../vendor/VendorList';
