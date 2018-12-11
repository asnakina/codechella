import React from 'react';

export default function Vendor(props) {
  return (

<div id="wrapper">
<div className="vendor">

<div className="img_wrapper">
<img alt={props.vendor.name} src={props.vendor.img_url}/>
<span><input className="favebutton" type="button" value="Add to Favorites"/></span>
</div>
      <h3>{props.vendor.name.toUpperCase()}</h3>

    </div>
  </div>
  )
}
