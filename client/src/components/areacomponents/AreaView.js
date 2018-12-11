import React, { Component } from 'react';
import AreaList from './AreaList';
// import serv from '../services/apiservices.js';

export default class AreaView extends Component {
  constructor(props) {
     super(props);
     this.state = {
      list: true
    }
  }

  render() {
    return (
      <div>
          {this.state.list ? <AreaList
            areas = {this.props.areas}/> : null}
       </div>
     )
  }
}
