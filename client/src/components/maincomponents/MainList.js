import React from 'react';
import imgMain from '../../images/imgMain1.jpg'

export default function MainList(props) {
  return (
    <div className="main">
        <h1>Music Festival</h1>
        <img src={imgMain} alt={props.imgMain} className="imgMain" />
    </div>
  )
}
