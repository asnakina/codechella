import React from 'react';
import './VendorList.css';
export default function VendorModal(props) {
  return (
    <div className="VendorModal">
      <button className="exit" onClick={props.reset}>X</button>
      <img onClick={props.onChange} alt={props.vendor.name} src={props.vendor.img_url}/>
      <h3 onClick={props.onChange}>{props.vendor.name.toUpperCase()}</h3>
      <p>{props.vendor.description}</p>
      <span><input className="favebutton" type="button" value="Add to Favorites"/></span>
    </div>
  )
}
