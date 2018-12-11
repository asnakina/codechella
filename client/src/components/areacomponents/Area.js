import React from 'react';

export default function Area(props) {
  return (
    <div>
       <h3>{props.name}</h3>
       <img src={props.img_url} />
    </div>
   )
}
