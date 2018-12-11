import React from 'react';
import imgMap from '../images/imgMap.png'

export default function MapList(props) {
  return (
    <div className="map">
        <h1>Festival's map:</h1>
        <img src={imgMap} className="imgMap" />
    </div>
  )
}
