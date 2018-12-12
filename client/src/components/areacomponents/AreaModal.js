import React from 'react';

export default function AreaModal(props) {
    const mapArtists = props.artists.filter(theArtist => theArtist.areas_id === props.selectedArea).map((artist) => {
      return (
        <div key={artist.id}>
           <p>{props.artists.name}</p>
           <p>{props.artists.timeslot}</p>
        </div>
      );
    }
  );
  return (
    <div>{mapArtists}</div>
  );
}
