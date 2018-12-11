// import React, { Component } from 'react';
// import Area from './Area';
// import serv from './services/apiservices.js';
//
// class AreaList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       screen: 'areaView',
//       artists: '',
//       vendors: '',
//       areas: ''
//     }
//   }
//
//   setView = (view) => {
//     this.setState({
//       screen: view
//     });
//   }
//
//   render() {
//     //switching btw views
//
//     return (
//     <div>
//      <h1>Areas:</h1>
//      <nav>
//         <button className="areaBtn">Artists</button>
//         <button className="areaBtn">Time</button>
//         <button className="areaBtn">...</button>
//      </nav>
//       {props.areas.map(eachArea => (
//         <Area
//           key={eachArea.id}
//           id={eachArea.id}
//           name={eachArea.name}
//           img_url={eachArea.img_url}
//          />
//        ))
//       }
//     </div>
//   );
//  }
// }
//
// export default AreaList;

import React from 'react';
import Area from './Area';

export default function AreaList(props) {
  return (
    <div>
     <h1>Areas:</h1>
     <nav>
        <button className="areaBtn">Artists</button>
        <button className="areaBtn">Time</button>
        <button className="areaBtn">...</button>
     </nav>
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
