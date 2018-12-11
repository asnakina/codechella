import React from 'react';
import './VendorList.css';

export default function Vendor(props) {
  return (
<<<<<<< HEAD

<div id="wrapper">
<div className="vendor">

<div className="img_wrapper">
<img alt={props.vendor.name} src={props.vendor.img_url}/>
<span><input className="favebutton" type="button" value="Add to Favorites"/></span>
</div>
      <h3>{props.vendor.name.toUpperCase()}</h3>

=======
    <div className="vendor">
      <img src={props.vendor.img_url}/>
      <h3>{props.vendor.name}</h3>
      
>>>>>>> 5d6fc08eb454a72ef7daf08994e13cb7a7062bf0
    </div>
  </div>
  )
}
