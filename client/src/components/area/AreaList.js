import React from 'react';
import Area from './Area';
import './Area.css';
// import serv from './services/apiservices.js';

function AreaList(props) {
  return (
    <div>
     <h1>Areas:</h1>
      <div className="areas">
       {props.areas.map(eachArea => (
        <Area
          key={eachArea.id}
          id={eachArea.id}
          name={eachArea.name}
          img_url={eachArea.img_url}
          handleChange={props.onChange}
         />
        ))
       }
      </div>
    </div>
   );
}

export default AreaList;
