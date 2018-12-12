import React, { Component } from 'react';
import VendorList from './VendorList';

export default class VendorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: true

    }

  }



  render() {
    return (
      <div>
      {this.state.list ? <VendorList
        vendors = {this.props.vendors}/> : null}
      </div>
    )
  }
}
