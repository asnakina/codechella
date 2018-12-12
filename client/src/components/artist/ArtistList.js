import React from 'react';
import Artist from './Artist';
import './Artist.css';

export default function ArtistList(props) {
  return (
    <div className="ArtistList">
      {props.artists.map(artist => {
        return (
          <Artist key={artist.id} artist={artist}/>
        )
      })}
    </div>
  )
}
// <h1>Artists:</h1>
