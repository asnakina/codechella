import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';
import './Vendor.css';


export default class VendorModal extends React.Component {
  constructor(props) {
    super(props);
      this.handleClose = this.handleClose.bind(this);
  }

  handleClose = (e) => {
    this.props.setModalVisibility(false)
  }

render() {
  return (
    <div className="VendorModalParent">
      <button onClick={this.handleClose} className="VendorExit">X</button>
        <div className="VendorModalChild">
          <h3>Artists</h3>
            <div className="VendorModalArtistVendor">
              <div className="VendorModalArtist">
               {this.props.artists.map((artist) => {
                 return (
                  <Artist artist={artist} />
                 )
               })}
             </div>
           <h3>Vendors</h3>
           <div className="VendorModalVendor">
               {this.props.vendors.map((vendor) => {
                 return (
                   <Vendor vendor={vendor} />
                  )
                })}
               </div>
            </div>
         </div>
     </div>
   );
  }
}
