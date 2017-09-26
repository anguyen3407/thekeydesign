import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'

class App extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (
<div className = "app">
  <div className = "first-box">
<Nav/>
{/* <div className= 'Nav-bar'>

<div className = "logo"></div>
<div className = "Who"> WHO WE ARE </div>
<div className = "What"> WHAT WE DO </div>
<div className = "contacts"> CONTACTS </div>
<div className = "prices"> PRICES / SERVICES </div>
<div className = "testimonials"> TESTIMONIALS </div>
<div className = 'insta-img'>
<a href="https://instagram.com/thekeydesignstaging" target="_blank"><i class="fa fa-instagram fa-5x"> <img src = "http://logomecca.com/wp-content/uploads/2015/07/instagram_logo_transparent_background_vector.png" width='20px' height="20px" alt='instagram'/> </i></a>
</div>
</div> */}


<div className = 'banner'>
<div className = 'banner-img'>
<img src="https://i.imgur.com/tUJTT0e.png" width="250" height="180" alt="The Key Design"/>
</div>
<h2 className = 'logo-name'>HOME STAGING</h2>
</div>


  <div className="Choose">CHOOSE CATEGORY <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/10897-200.png' width='10px' height='10' /></div>

  </div>
  <div className="Pictures">
  <div className="Pic">
  <img className = 'firstpic' src='https://i.imgur.com/hBN2K4s.jpg' width='100%' height='100%'/>

</div>
<div className="Pic">
<img className = 'greypic' src='https://i.imgur.com/Dzjystk.jpg' width='100%' height='100%'/>

</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/XHXB8X1.jpg' width='100%' height='100%'/>

</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/UC3vSRO.jpg' width='100%' height='100%'/>

</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/nzHdZA3.jpg' width='100%' height='100%'/>

</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/keZ7Txh.jpg' width='100%' height='100%'/>

</div>
  </div>
  <div className='scroll-contain'>
  <a href="#" className='scroll'>scroll to top</a>
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

export default App;
