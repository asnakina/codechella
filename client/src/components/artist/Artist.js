import React from 'react';
import './ArtistList.css';

export default function Artist(props) {
  return (
    <div id={props.artist.name} className="Artist">
      <img onClick={props.onChange} alt={props.artist.name} src={props.artist.img_url}/>
      <h3 onClick={props.onChange}>{props.artist.name.toUpperCase()}</h3>
      {props.isFavorite ?
      <span><input className="favebutton" name={props.artist.id} type="button" value="Remove from Favorites" onClick={props.unfavoriteArtist}/></span> :
      <span><input className="favebutton" name={props.artist.id} type="button" value="Add to Favorites" onClick={props.favoriteArtist}/></span>}
      {props.creator ?
      <input type="text" name={props.artist.id} placeholder="update image url" className="update-input" onKeyUp={props.update}/>: null}
      {props.creator ?
      <button className="exit" value={props.artist.id} onClick={props.delete}>🗑</button>: null}
    </div>
  )
}
