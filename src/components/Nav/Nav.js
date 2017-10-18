import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';



class App extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className= 'Nav-bar'>
    <div className='nav-container'>
    <Link to='/' className='nav-home'>HOME</Link>
      <Link to='/whatWeAre' className='nav-who'> ABOUT </Link>
      <Link to='/contacts' className='nav-contacts'>CONTACTS</Link>
      <Link to='/prices' className='nav-prices'>PRICES / SERVICES</Link>
      {/* <Link to='/' className='nav-testimonials'>TESTIMONIALS</Link> */}
      <a className='auth0' href={'/auth'}>
          <button className='signup-buttontheme'> <font face="Lato"> LOG IN </font></button> </a>
      <div className = 'insta-img'>
      <a href="https://instagram.com/thekeydesignstaging" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-5x"> 
        <img src = "https://i.imgur.com/dO8XeAB.png" width='21px' height="20px" alt='instagram'/> </i></a>
      <a href="https://www.facebook.com/TheKeyDesign1/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook fa-5x">
        <img src = "https://i.imgur.com/gogxbMd.png" width='21px' height="20px" alt='facebook'/></i></a>
    </div>
  </div>
</div>

  );
  }
}

export default App;
