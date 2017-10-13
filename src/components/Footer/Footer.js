import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


class Footer extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className= 'Footer'>
<div className='footer-container'>
    <div className='footer'>
      <div className='footer-contacts'> 
    <div className='contactUs'>CONTACT US </div>
    <div className='footer-title'>THE KEY DESIGN | HOME STAGING</div>
    <div className='phone'>PHONE: 801.662.9117</div>
    <div className='email'>EMAIL: info@thekeydesign.com </div>
   </div>
   <div className='footer-nav'>
<Link to='/' className='nav-home'>HOME</Link>
<Link to='/whatWeAre' className='nav-who'> WHO WE ARE </Link>
<Link to='/whatWeAre' className='nav-what'>WHAT WE DO</Link>
<Link to='/contacts' className='nav-contacts'>CONTACTS</Link>
<Link to='/prices' className='nav-prices'>PRICES / SERVICES</Link>
<Link to='/' className='nav-home'>TESTIMONIALS</Link>
<div className = 'insta-img'>
<a href="https://instagram.com/thekeydesignstaging" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-5x"> <img src = "http://logomecca.com/wp-content/uploads/2015/07/instagram_logo_transparent_background_vector.png" width='20px' height="20px" alt='instagram'/> </i></a>
</div>
</div>
    </div>
    </div>
</div>

  );
  }
}

export default Footer;


