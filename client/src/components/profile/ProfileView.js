import React from 'react';


export default function ProfileView(props) {
  console.log(props.user);
    return (
      <div>
        <h3>{props.user.username}</h3>
      </div>
    )
}
// import ArtistList from '../artist/ArtistList';
// import VendorList from '../vendor/VendorList';
