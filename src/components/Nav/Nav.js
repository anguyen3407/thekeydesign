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

<Link to='/' className='nav-home'>HOME</Link>
<Link to='/whatWeAre' className='nav-who'> WHO WE ARE </Link>
<Link to='/whatWeAre' className='nav-what'>WHAT WE DO</Link>
<Link to='/contacts' className='nav-contacts'>CONTACTS</Link>
<Link to='/prices' className='nav-prices'>PRICES / SERVICES</Link>
<Link to='/' className='nav-home'>TESTIMONIALS</Link>
<div className = 'insta-img'>
<a href="https://instagram.com/thekeydesignstaging" target="_blank"><i class="fa fa-instagram fa-5x"> <img src = "http://logomecca.com/wp-content/uploads/2015/07/instagram_logo_transparent_background_vector.png" width='20px' height="20px" alt='instagram'/> </i></a>
</div>
</div>

  );
  }
}

export default App;
