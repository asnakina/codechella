import React from 'react';
import './Map.css';
import imgMap from '../../images/imgMap.png'

export default function MapList(props) {
  return (
    <div className="map">
        <h2 className="header">MAP</h2>
        <img src={imgMap} alt={props.imgMap} className="imgMap" />
    </div>
  )
}
