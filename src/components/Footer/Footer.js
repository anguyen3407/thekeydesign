import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className= 'App'>
<div className='scroll-contain'>
  <a href="top" className='scroll'>scroll to top</a>
  </div>
<div className='footer-container'>
    <div className='footer'>
      <div className='footer-contacts'> 
    <div className='contactUs'>CONTACT US </div>
    <div className='footer-title'>THE KEY DESIGN | HOME STAGING</div>
    <div className='phone'>PHONE: 801.662.9117</div>
    <div className='email'>EMAIL: info@thekeydesign.com </div>
   </div>
    </div>
    </div>
</div>

  );
  }
}

export default Footer;


