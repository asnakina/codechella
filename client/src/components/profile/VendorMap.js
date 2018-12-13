import React from 'react';


export default function VendorMap(props) {
  return (
    <div>

      {props.user.vendors.map(vendor => {
        return (
          <h3>
          key={vendor.id}
          vendor={vendor.name}
          description={vendor.description}
          </h3>
        )
      })}
    </div>
  )
}
