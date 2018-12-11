import React from 'react';
import './VendorList.css';
import Vendor from './Vendor';

export default function VendorList(props) {
  return (

    <div className="vendor-list">
      {props.vendors.map(vendor => {
        return (
          <Vendor
            key={vendor.id}
            vendor={vendor}/>
        )
      })}
    </div>
<<<<<<< HEAD


=======
>>>>>>> 5d6fc08eb454a72ef7daf08994e13cb7a7062bf0
  )
}
 // <h1>Vendors:</h1>
