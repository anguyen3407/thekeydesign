import React, { Component } from 'react';
import './chooseCategory.css';
import Nav from '../Nav/Nav';

class Bedroom extends Component {
  // https://imgur.com/KmPZtGv
  // https://imgur.com/kVN25Tk
  // https://imgur.com/mPXzYIF
  // https://imgur.com/tQJyDHT
  // https://imgur.com/38KYBy5
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
    
    
  
    render() {
  
      return (
  
<div className='chooseBedroom'>
<Nav/>
<div className= 'wrapper-Bedroom'>
<div className='box box1Bedroom'>  <img src="https://imgur.com/KmPZtGv.jpg" width='100%' height='100%' alt="Cute cat"/></div>
<div className='box box2Bedroom'> <img src=" https://imgur.com/kVN25Tk.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
<div className='box box3Bedroom'> <img src="https://imgur.com/mPXzYIF.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
<div className='box box4Bedroom'> <img src="https://imgur.com/tQJyDHT.jpg" width='100%' height='100%' alt="Cute cat"/></div>
<div className='box box5Bedroom'> <img src="https://imgur.com/38KYBy5.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
</div>
</div>
  
    );
    }
  }
  
  export default Bedroom;