import React from 'react';
import './Area.css';
// import img_url from '../../images/imgStage1.jpg'

export default function Area(props) {
  return (
    <div>
       <h3>{props.name}</h3>
       <img src={props.img_url} />
    </div>
   )
}
