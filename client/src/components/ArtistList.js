import React from 'react';
import Artist from './Artist';

export default function ArtistList(props) {
  return (
    <div className="ArtistList">
      {props.artists.map(artist => {
        return (
          <Artist artist={artist}/>
        )
      })}
    </div>
  )
}
