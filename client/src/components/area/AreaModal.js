import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';

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
    <div className="AreaModalParent">
      <button onClick={this.handleClose} className="AreaExit">X</button>
        <div className="AreaModalChild">
          <h3>Artists</h3>
            <div className="AreaModalArtistVendor">
              <div className="AreaModalArtist">
               {this.props.artists.map((artist) => {
                 return (
                  <Artist artist={artist} />
                 )
               })}
             </div>
           <h3>Vendors</h3>
           <div className="AreaModalVendor">
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
