import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';
// import { Modal } from 'reactstrap';
// import { Modal, Button } from 'antd';

export default function AreaModal(props) {
  // showModal = () => {
  //   this.setState({
  //     areaModalVisibility: true,
  //   });
  // }

  // handleClose = (e) => {
  //   props.setModalVisibility(false)
  // }
  //
  // handleChange = (e) => {
  //   this.setState({
  //     areaModalVisibility: false
  //   });

  return (
    <div className="static-modal">
    {/*<Modal.Dialog>
      <Modal.Header>
        <button>Close</button>
        </Modal.Header>
        <Modal.Body>*/}
          <div>{props.artists.map((artist) => {
            return (
        <Artist artist={artist} />
      )
    })}
    {props.vendors.map((vendor) => {
      return (
        <Vendor vendor={vendor} />
      )
    })}
    </div>
    {/*</Modal.Body>
    </Modal.Dialog>*/}
     </div>
  );
}

// import { Modal, Button } from antd;
//
// class AreaModal extends React.Component {
//   state = { visible: false }
// }
