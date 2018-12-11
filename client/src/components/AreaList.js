import React from 'react';
import Area from './Area';

export default function AreaList(props) {
  return (
    <div>
     <h1>Areas:</h1>
      {props.areas.map(eachArea => (
        <Area
          key={eachArea.id}
          id={eachArea.id}
          name={eachArea.name}
          img_url={eachArea.img_url}
         />
       ))
      }
    </div>
  );
}