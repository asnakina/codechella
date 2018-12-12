import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';
// import { Modal } from 'reactstrap';
// import { Modal, Button } from 'antd';
// import AreaModalChild from './AreaModalChild';

export default class AreaModal extends React.Component {
  constructor(props) {
    super(props);
      this.handleClose = this.handleClose.bind(this);
  }

  handleClose = (e) => {
    this.props.setModalVisibility(false)
  }

render() {
  return (
    <div>
    <button onClick={this.handleClose}>Close</button>

    <h1>Modal</h1>
      <div className="static-modal">
        <div>{this.props.artists.map((artist) => {
                return (
                  <Artist artist={artist} />
                )
              })}
              {this.props.vendors.map((vendor) => {
                return (
                  <Vendor vendor={vendor} />
                )
              })}
       </div>
     </div>
   </div>

  );
 }
}
/*<Modal title="Welcome"
       visible={this.props.visible}
       onCancel={this.handleClose}>*/

        /*</Modal>*/
