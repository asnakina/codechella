import React from 'react';
import './Area.css';

export default function Area(props) {
  return (
    <div onClick={() => props.handleChange(props.id)}>
       <h3>{props.name}</h3>
       <div>
         <img src={props.img_url} className="area" />
       </div>
    </div>
   )
};
