import React from 'react';
import Area from './Area';
import './Area.css';

function AreaList(props) {
  return (
    <div>
      <div className="AreaList">
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
