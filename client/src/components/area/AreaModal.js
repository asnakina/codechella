import React from 'react';
import Artist from '../artist/Artist';
import Vendor from '../vendor/Vendor';

export default function AreaModal(props) {
  return (
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
  );
}
    //       <p>{artist.timeslot}</p>
