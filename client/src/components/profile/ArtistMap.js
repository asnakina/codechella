import React from 'react';


export default function ArtistMap(props) {
  return (
    <div>

      {props.user.artists.map(artist => {
        return (
          <h3>
          key={artist.id}
          artist={artist.name}
          description={artist.description}
          </h3>
        )
      })}
    </div>
  )
}
