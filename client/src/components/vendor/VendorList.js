import React from 'react';
import Vendor from './Vendor';
import './VendorList.css';

export default function VendorList(props) {
  return (
    <div className="VendorList">
      {props.vendors.map(vendor => {
        return (
          <Vendor key={vendor.id}
          vendor={vendor}
          onChange={props.onChange}
          favoriteVendor={props.favoriteVendor}
          unfavoriteVendor={props.unfavoriteVendor}
          isFavorite={props.userVendors ?
            props.userVendors.some(userVendor => vendor.id === userVendor.id) :
          false}
          creator={props.creator === vendor.created_by || props.creator <= 3}
          delete={props.delete}
          />
        )
      })}
    </div>
  )
}
