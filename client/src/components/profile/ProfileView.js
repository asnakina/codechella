import React, { Component } from 'react';
import ProfileModal from './ProfileModal';
import './Profile.css';
import '../area/Area.css';
export default class ProfileView extends Component {
  constructor(props) {
     super(props);
     this.state = {
      list: true,
      selectedProfile: ''
     }
   this.handleChange = this.handleChange.bind(this);

  }

  handleChange(selectedProfile) {
    this.setState({
      selectedProfile
    });
  }

  render() {
     return (

      <div>
        {this.props.user.artists && this.props.user.vendors ?
             <ProfileModal
               id={this.state.selectedProfile}
               artists={this.props.user.artists}
               vendors={this.props.user.vendors}
               profiles = {this.props.profiles}
               favoriteArtist={this.props.favoriteArtist}
               unfavoriteArtist={this.props.unfavoriteArtist}
               favoriteVendor={this.props.favoriteVendor}
               unfavoriteVendor={this.props.unfavoriteVendor}
             /> :
             <h2>Add some favorites</h2>}


      </div>
     )
   }
}
