import React, { Component } from 'react';
import ProfileModal from './ProfileModal';

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
             <ProfileModal
               id={this.state.selectedProfile}
               artists={this.props.user.artists.filter(artist => artist.profile_id === this.state.selectedProfile)}
               vendors={this.props.user.vendors.filter(vendor => vendor.profile_id === this.state.selectedProfile)}
               profiles = {this.props.profiles}
             />

           }
      </div>
     )
   }
}
