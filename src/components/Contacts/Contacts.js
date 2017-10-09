import React, { Component } from 'react';
import './Contacts.css';
import Footer from '../Footer/Footer';


class Contacts extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className= 'Contacts'>
  <div className="emptyspace"></div>
  <div classname='map-box'>
      <iframe className='iframe'
        width="100%"
        height="400"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD8lEgqTZPBwI4VRUM6YoGc8_S6lvziCSc&q=Salt+Lake+City,+UT/" allowfullscreen>
      </iframe>
      <div className='contact-box-container'>
<div className='contact-box'>
  <img src='http://www.aberke.com/static/img/mail-black-white.png' width='30px' height='30px' alt=''/>info@thekeydesign.com
  </div>
  </div>
  </div> 
  <div className='message-box-container'>
    <div className='message-box'>
 <h1>SEND A MESSAGE</h1>
 <div className='messageInput'>
 <div className='messageInput-container'>
   </div>
   <div className='messageInput-container2'>
     <div className='messageInput-container2-box1'></div>
     <div className='messageInput-container2-box2'></div>
     <div className='messageInput-container2-box3'>
       <button src='send-btn'>SEND</button>
     </div>
   </div>
 </div>
 </div>
 </div>
 <Footer />
</div>

  );
  }
}

export default Contacts;