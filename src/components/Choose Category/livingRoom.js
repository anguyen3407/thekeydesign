import React, { Component } from 'react';
import './chooseCategory.css';
import Nav from '../Nav/Nav';

class LivingRoom extends Component {
  // https://imgur.com/AaRuLPI
  // https://imgur.com/tFQJOIj
  // https://imgur.com/PEBzLnv
  // https://imgur.com/kECQsRm
  // https://imgur.com/IlhENvx
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
  //
  //
  //
  //
    
  
    render() {
  
      return (
  
<div className='chooseLiving'>
<Nav/>
<div className= 'wrapper-Living'>
<div className='box box1Living'>  <img src="https://imgur.com/AaRuLPI.jpg" width='100%' height='100%' alt="Cute cat"/></div>
<div className='box box2Living'> <img src="https://imgur.com/tFQJOIj.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
<div className='box box3Living'> <img src="https://imgur.com/kECQsRm.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
<div className='box box4Living'> <img src="https://imgur.com/IlhENvx.jpg" width='100%' height='100%' alt="Cute cat"/></div>
</div>
</div>
  
    );
    }
  }
  
  export default LivingRoom;