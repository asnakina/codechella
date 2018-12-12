import React, { Component } from 'react';
import AreaList from './AreaList';
import AreaModal from './AreaModal';
// import serv from '../services/apiservices.js';

export default class AreaView extends Component {
  constructor(props) {
     super(props);
     this.state = {
      list: true,
      selectedArea: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedArea) {
    this.setState({
      selectedArea
    });
  }

  render() {
    console.log(this.props.areas);
    return (
      <div>
      {this.state.selectedArea ?
        <AreaModal
          id={this.state.selectedArea}
          artists={this.props.artists.filter(artist => artist.area_id === this.state.selectedArea)}
          vendors={this.props.vendors.filter(vendor => vendor.area_id === this.state.selectedArea)}
        /> :
        <AreaList
           areas = {this.props.areas}
           artists = {this.props.artists}
           onChange= {this.handleChange}
        /> }
       </div>
     )
  }
}
