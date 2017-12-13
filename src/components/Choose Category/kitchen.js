import React, { Component } from 'react';
import './chooseCategory.css';
import Nav from '../Nav/Nav';

class Kitchen extends Component {
  // https://imgur.com/5y7DYhJ
  // https://imgur.com/BHMUVdv
  // https://imgur.com/dVtZKRm
  // https://imgur.com/IlvLkXa
  // https://imgur.com/6T13Q5J
  // https://imgur.com/QhGBwGt
  // https://imgur.com/IIuH4Mt
  // https://imgur.com/o2cKyZz
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

        <div className='chooseKitchen'>
        <Nav/>
        <div className= 'wrapper-kitchen'>
        <div className='box box1kitchen'>  <img src="https://imgur.com/dVtZKRm.jpg" width='100%' height='100%' alt="Cute cat"/></div>
        <div className='box box2kitchen'> <img src="https://imgur.com/BHMUVdv.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
        <div className='box box3kitchen'> <img src="https://imgur.com/5y7DYhJ.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
        <div className='box box4kitchen'> <img src="https://imgur.com/IlvLkXa.jpg" width='100%' height='100%' alt="Cute cat"/></div>
        <div className='box box5kitchen'> <img src=" https://imgur.com/6T13Q5J.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
        <div className='box box6kitchen'> <img src="https://imgur.com/QhGBwGt.jpg" width='100%' height='100%' alt="Cute cat"/></div>
        <div className='box box7kitchen'><img src=" https://imgur.com/IIuH4Mt.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
        <div className='box box8kitchen'> <img src=" https://imgur.com/o2cKyZz.jpg" width='100%' height='100%' alt="Cute cat"/> </div>
      </div>
      </div>
  
    );
    }
  }
  
  export default Kitchen;