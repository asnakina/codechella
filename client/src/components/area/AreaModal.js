import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';
import './Area.css';

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
        <div className="AreaModalChild">
        <button onClick={this.handleClose} className="AreaExit">X</button>
          <h3>Artists</h3>
            <div className="AreaModalArtistVendor">
              <div className="AreaModalArtist">
               {this.props.artists.map((artist) => {
                 return (
                   <Artist key={artist.id}
                      artist={artist}
                      userArtists={this.props.userArtists}
                      favoriteArtist={this.props.favoriteArtist}
                      unfavoriteArtist={this.props.unfavoriteArtist}
                      isFavorite={this.props.userArtists ?
                        this.props.userArtists.some(userArtist => artist.id === userArtist.id) :
                      false}
                    />
                  )
               })}
             </div>
           <h3>Vendors</h3>
           <div className="AreaModalVendor">
               {this.props.vendors.map((vendor) => {
                 return (
                   <Vendor key={vendor.id}
                      vendor={vendor}
                      userVendors={this.props.userVendors}
                      favoriteVendor={this.props.favoriteVendor}
                      unfavoriteVendor={this.props.unfavoriteVendor}
                      isFavorite={this.props.userVendors ?
                        this.props.userVendors.some(userVendor => vendor.id === userVendor.id) :
                      false}
                    />
                  )
                })}
               </div>
            </div>
         </div>
     </div>
   );
  }
}
