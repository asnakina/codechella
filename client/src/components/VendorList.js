import React from 'react';
import './VendorList.css';
import Vendor from './Vendor';

export default function VendorList(props) {
  return (
    <div className="vendor-list">
      {props.vendors.map(vendor => {
        return (
          <Vendor vendor={vendor}/>
        )
      })}
    </div>
  )
}
 // <h1>Vendors:</h1>
