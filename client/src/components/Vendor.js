import React from 'react';
import './VendorList.css';

export default function Vendor(props) {
  return (
    <div className="vendor">
      <img src={props.vendor.img_url}/>
      <h3>{props.vendor.name}</h3>
      
    </div>
  )
}
