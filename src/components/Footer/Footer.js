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

<div className='footer-container'>
    <div className='footer'>
    <div className='footer-contacts'> 
    <div className='contactUs'><font color='lightcoral'>CONTACT US </font></div>
    <div className='footer-title'>THE KEY DESIGN <font color='lightcoral'>|</font> HOME STAGING</div>
    <div className='phone'>PHONE<font color='lightcoral'>:</font> 801<font color='lightcoral'>.</font>662<font color='lightcoral'>.</font>9117</div>
    <div className='email'>EMAIL<font color='lightcoral'>:</font> info<font color='lightcoral'>@</font>thekeydesign.com </div>
   </div>
   <div className='footer-logo'>
     <img src='https://i.imgur.com/nZbkoSd.png' className='footer-img' alt=''/>
     </div>
   <div className='footer-nav'>
<Link to='/' className='foot-home'>HOME</Link>
<Link to='/whatWeAre' className='foot-who'> ABOUT </Link>
<Link to='/contacts' className='foot-contacts'>CONTACTS</Link>
<Link to='/prices' className='foot-prices'>PRICES / SERVICES</Link>
{/* <Link to='/' className='foot-testimonials'>TESTIMONIALS</Link> */}
<div className = 'insta-fb-img'>
<a href="https://instagram.com/thekeydesignstaging" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-5x"> 
        <img src = "https://i.imgur.com/dO8XeAB.png" width='21px' height="20px" alt='instagram'/> </i></a>
      <a href="https://www.facebook.com/TheKeyDesign1/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook fa-5x">
        <img src = "https://i.imgur.com/gogxbMd.png" width='21px' height="20px" alt='facebook'/></i></a>
</div>
</div>
    </div>
    </div>

  );
  }
}

export default Footer;


