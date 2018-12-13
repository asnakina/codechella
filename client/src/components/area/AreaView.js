import React, { Component } from 'react';
import AreaList from './AreaList';
import AreaModal from './AreaModal';

export default class AreaView extends Component {
  constructor(props) {
     super(props);
     this.state = {
      list: true,
      selectedArea: '',
      areaModalVisibility: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.setModalVisibility = this.setModalVisibility.bind(this);
  }

  handleChange(selectedArea) {
    this.setState({
      selectedArea,
      areaModalVisibility: true
    });
  }

  setModalVisibility(value) {
    this.setState({
      areaModalVisibility: value,
    })
  }

  render() {
    console.log(this.props.areas);
    let areaModalVisibility = this.state.areaModalVisibility
    return (
      <div>
      <h2 className="header">STAGES</h2>
      {this.state.areaModalVisibility ?
        <AreaModal
           id={this.state.selectedArea}
           artists={this.props.artists.filter(artist => artist.area_id === this.state.selectedArea)}
           vendors={this.props.vendors.filter(vendor => vendor.area_id === this.state.selectedArea)}
           setModalVisibility={this.setModalVisibility}
           /*visible={areaModalVisibility}*/
            areas = {this.props.areas}
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
