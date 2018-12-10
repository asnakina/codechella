import React from 'react';

export default function Artist(props) {
  return (
    <div className="Artist">
      <img src={props.artist.img_url}/>
      <h3>{props.artist.name}</h3>
    </div>
  )
}
// name
// description
// timeslot
// img_url
