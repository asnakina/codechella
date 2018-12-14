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
             <ProfileModal
               id={this.state.selectedProfile}
               artists={this.props.user.artists}
               vendors={this.props.user.vendors}
               profiles = {this.props.profiles}
             />


      </div>
     )
   }
}
