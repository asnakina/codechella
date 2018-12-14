import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';
import './Profile.css';


export default class ProfileModal extends React.Component {
  constructor(props) {
    super(props);

  }


render() {
  return (
    <div className="ProfileModalParent">
        <div className="ProfileModalChild">
          <h3>Artists</h3>
            <div className="ProfileModalArtistProfile">
              <div className="ProfileModalArtist">
               {this.props.artists.map((artist) => {
                 return (
                  <Artist artist={artist} />
                 )
               })}
             </div>
           <h3>Vendor</h3>
           <div className="ProfileModalProfile">
             <div className="ProfileModalVendor">
               {this.props.vendors.map((vendor) => {
                 return (
                   <Vendor vendor={vendor} />
                  )
                })}
              </div>
               </div>
            </div>
         </div>
     </div>
   );
  }
}
