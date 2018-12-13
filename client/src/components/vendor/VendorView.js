import React, { Component } from 'react';
import VendorList from './VendorList';
import VendorModal from './VendorModal';
import VendorForm from './VendorForm';
import './VendorList.css';

export default class VendorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: null
    }
    this.handleModal = this.handleModal.bind(this);
    this.resetModal = this.resetModal.bind(this);
  }

  handleModal(e) {
    let { id } = e.target.parentNode;
    console.log(e.target.parentNode.id);
    const vendor = this.props.vendors.filter(vendor => vendor.name.toLowerCase() === id.toLowerCase())[0];
    this.setState({vendor});
  }

  resetModal() {
    this.setState({vendor: null});
  }

  render() {
    return (
      <div>
      <h2 className="header">VENDORS</h2>
      {!this.state.vendor ?
        <VendorList
          vendors={this.props.vendors}
          onChange={this.handleModal}
          favoriteVendor={this.props.favoriteVendor}
          unfavoriteVendor={this.props.unfavoriteVendor}
          userVendors={this.props.userVendors}/> :
        <VendorModal
          vendor={this.state.vendor}
          reset={this.resetModal}/>}
          <h2 className="header">WILDCARDS</h2>
        <VendorForm
          vendors={this.props.vendors}
          submit={this.props.submit}
        />
      </div>
    )
  }
}
