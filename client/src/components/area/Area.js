import React from 'react';
import './Area.css';

export default function Area(props) {
  return (
     <div onClick={() => props.handleChange(props.id)} className="Area">
           <img src={props.img_url} alt={props.img_url} />
            <h3>{props.name.toUpperCase()}</h3>
       </div>
    )
  }
// <h3>{props.name}</h3>
