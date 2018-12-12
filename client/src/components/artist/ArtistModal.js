import React from 'react';
import './ArtistList.css';
export default function ArtistModal(props) {
  return (
    <div className="ArtistModal">
      <button className="exit" onClick={props.reset}>X</button>
      <img onClick={props.onChange} alt={props.artist.name} src={props.artist.img_url}/>
      <h3 onClick={props.onChange}>{props.artist.name.toUpperCase()}</h3>
      <p>{props.artist.description}</p>
      <span><input className="favebutton" type="button" value="Add to Favorites"/></span>
    </div>
  )
}
