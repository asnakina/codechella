import React from 'react';
import './ArtistList.css';

export default function Artist(props) {
  return (
<div id="wrapper">
<div className="artist">

<div className="img_wrapper">
<img alt={props.artist.name} src={props.artist.img_url}/>
<span><input className="favebutton" type="button" value="Add to Favorites"/></span>
</div>
      <h3>{props.artist.name.toUpperCase()}</h3>
    </div>
  </div>
  )
}
