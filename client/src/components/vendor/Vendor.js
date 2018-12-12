import React from 'react';
import './VendorList.css';

export default function Vendor(props) {
  return (
    <div className="Vendor">
      <img alt={props.vendor.name} src={props.vendor.img_url}/>
      <h3>{props.vendor.name.toUpperCase()}</h3>
      <span><input className="favebutton" type="button" value="Add to Favorites"/></span>
    </div>
  )
}
