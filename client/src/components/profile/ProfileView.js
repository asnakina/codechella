import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';

export default function ProfileView(props) {

    return (
      <div className="ArtistList">

        {props.user.artists.map(artist => {
          return (
            <Artist key={artist.id}
            artist={artist}
            favoriteArtist={props.favoriteArtist}
            unfavoriteArtist={props.unfavoriteArtist}
            isFavorite={props.userArtists ?
              props.userArtists.some(userArtist => artist.id === userArtist.id) :
            false}/>
          )
        })}
        {props.user.vendors.map(vendor => {
          return (
            <Vendor key={vendor.id}
            vendor={vendor}
            favoriteVendor={props.favoriteVendor}
            unfavoriteVendor={props.unfavoriteVendor}
            isFavorite={props.userVendors ?
              props.userVendors.some(userVendor => vendor.id === userVendor.id) :
            false}/>
          )
        })}

      </div>

    )
}
