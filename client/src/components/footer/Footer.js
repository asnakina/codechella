import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
     <footer>
       <img src={require('../../images/footerImg1.png')} className="footerImg" />
       <span><p>Contacts: 4th floor in General Assembly, 10 E 21st St, New York, NY 10010</p></span>
     </footer>
   )
}
