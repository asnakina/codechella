import React from 'react';

export default function VendorList(props) {
  return (
    <div>
    {props.vendors.map(vendor => (
      <div

        key={vendor.id}>
        <h1> Name: { vendor.name }</h1>
        <p> Description: { vendor.hometown}</p>
        <p> Image: { vendor.img_url }</p>

      </div>
    ))}

      </div>
  )
}
