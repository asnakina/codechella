import React from 'react';
import './Artist.css';

export default function Artist(props) {
  return (
    <div className="Artist">
      <h3>{props.artist.name.toUpperCase()}</h3>
      <img alt={props.artist.name} src={props.artist.img_url}/>
    </div>
  )
}
// <h4>{props.artist.description}</h4>
// name
// description
// timeslot
// img_url
