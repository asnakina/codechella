import React from 'react';
import './VendorList.css';
import Vendor from './Vendor';

export default function VendorList(props) {
  return (

    <div className="VendorList">
      {props.vendors.map(vendor => {
        return (
          <Vendor
            key={vendor.id}
            vendor={vendor}/>
        )
      })}
    </div>
  )
}
 // <h1>Vendors:</h1>
