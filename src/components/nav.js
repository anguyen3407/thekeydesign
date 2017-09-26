import React, { Component } from 'react';
import './nav.css';

class App extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className= 'Nav-bar'>

<div className = "logo"></div>
<div className = "Who"> WHO WE ARE </div>
<div className = "What"> WHAT WE DO </div>
<div className = "contacts"> CONTACTS </div>
<div className = "prices"> PRICES / SERVICES </div>
<div className = "testimonials"> TESTIMONIALS </div>
<div className = 'insta-img'>
<a href="https://instagram.com/thekeydesignstaging" target="_blank"><i class="fa fa-instagram fa-5x"> <img src = "http://logomecca.com/wp-content/uploads/2015/07/instagram_logo_transparent_background_vector.png" width='20px' height="20px" alt='instagram'/> </i></a>
</div>
</div>

  );
  }
}

export default App;
