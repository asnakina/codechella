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
                  <Artist
                    key={artist.id}
                    artist={artist}
                    userArtists={this.props.userArtists}
                    favoriteArtist={this.props.favoriteArtist}
                    unfavoriteArtist={this.props.unfavoriteArtist}
                    isFavorite={this.props.userArtists ?
                      this.props.userArtists.some(userArtist => artist.id === userArtist.id) :
                    false} />
                 )
               })}
             </div>
           <h3>Vendor</h3>
           <div className="ProfileModalProfile">
             <div className="ProfileModalVendor">
               {this.props.vendors.map((vendor) => {
                 return (
                   <Vendor
                     key={vendor.id}
                     vendor={vendor}
                     userVendors={this.props.userVendors}
                     favoriteVendor={this.props.favoriteVendor}
                     unfavoriteVendor={this.props.unfavoriteVendor}
                     isFavorite={this.props.userVendors ?
                       this.props.userVendors.some(userVendor => vendor.id === userVendor.id) :
                     false} />
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
