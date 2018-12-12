import React, { Component } from 'react';
import Area from './Area';
import './Area.css';
import AreaModel from './AreaModel'
// import serv from './services/apiservices.js';

class AreaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(areaId) {
    this.setState({
      selectedArea: areaId
    });
  }

  render() {
  return (
    <div>
     <h1>Areas:</h1>
      <div className="areas">
       {this.props.areas.map(eachArea => (
        <Area
          key={eachArea.id}
          id={eachArea.id}
          name={eachArea.name}
          img_url={eachArea.img_url}
          handleChange={this.handleChange}
         />
        ))
       }
       <div>
         {this.state.selectedArea ? <AreaModal
           id={this.state.selectedArea}
           artists={this.props.artists}
           /> : false}
        </div>
      </div>
    </div>
   );
  }
}

export default AreaList;
