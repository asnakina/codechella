import React from 'react';
import Artist from './Artist';
import './ArtistList.css';

export default function ArtistList(props) {
  return (
    <div className="ArtistList">

      {props.artists.map(artist => {
        return (
          <Artist key={artist.id}
          artist={artist}
          onChange={props.onChange}
          favoriteArtist={props.favoriteArtist}
          unfavoriteArtist={props.unfavoriteArtist}
          isFavorite={props.userArtists ?
            props.userArtists.some(userArtist => artist.id === userArtist.id) :
          false}/>
        )
      })}
    </div>
  )
}
