import React, { Component } from 'react';
import './Prices.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

class Prices extends Component {
  constructor(){
    super() 
    this.state = {
      firstName: '',
      lastName: '',
      email_address: '',
      billing_address: '',
      phone_number: '',
      standard: false,
      twilight: false,
      drone: false,
      house: false,
      total: 675,
      city: '',
      state: '',
      zip: '', 
      street_address: ''
    }

this.onToken=this.onToken.bind(this);
  }

    onToken(token) {
      token.card = void 0;
      console.log('token', this.state);
      axios.post('/api/payment', { token, amount: 67500, options: this.state} ).then(response => {
        alert('Thank you for your purchase!')
      });
    }

    toggleCheckboxStandard() {
      if (this.state.standard === false) {
        this.setState({standard: !this.state.standard, total: this.state.total + 150})
      }
      else {
        this.setState({standard: !this.state.standard, total: this.state.total - 150})
      }
    }



    toggleCheckboxTwilight() {
      if (this.state.twilight === false) {
        this.setState({twilight: !this.state.twilight, total: this.state.total + 350})
      }
      else {
        this.setState({twilight: !this.state.twilight, total: this.state.total - 350})
      }
    }

    toggleCheckboxDrone() {
      if (this.state.drone === false) {
        this.setState({drone: !this.state.drone, total: this.state.total + 350})
      }
      else {
        this.setState({drone: !this.state.drone, total: this.state.total - 350})
      }
    }

    toggleCheckboxHouse() {
      if (this.state.house === false) {
        this.setState({house: !this.state.house, total: this.state.total + 1000})
      }
      else {
        this.setState({house: !this.state.house, total: this.state.total - 1000})
      }
    }

  render() {

  console.log(this.state)


    return (
  <div className= 'Prices'>
        <Nav/>
    <div className='price-banner-container'>
     <div className='prices-banner'>
          <img src='https://i.imgur.com/m3cDqdS.jpg'width="100%" height="100%" alt=''/>
          
          </div>
          <div className='Order-Summary-Container'>
            <div className='order'><h1 className='ordersummary'>ORDER SUMMARY</h1>
            <br></br>
            <div className='orders-checked'>
            {this.state.standard ? (<div className='standardClick'><span>Standard Photography&nbsp; &nbsp; $150 
              <input type="button" className='removebuttons' value='REMOVE' onClick={()=> {this.toggleCheckboxStandard()}}/><br></br><br></br>
              </span></div>) :  (<div className='favorite'><span></span></div>)}
            {this.state.twilight ? (<div className='standardClick'><span>Twilight Photography&nbsp; &nbsp; &nbsp;$350
              <input type="button" className='removebuttons' value='REMOVE' onClick={()=> {this.toggleCheckboxTwilight()}}/><br></br><br></br>
              </span></div>) :  (<div className='favorite'><span></span></div>)}
            {this.state.drone ? (<div className='standardClick'><span>Basic Drone Package&nbsp; &nbsp; &nbsp; $350
            <input type="button" className='removebuttons' value='REMOVE' onClick={()=> {this.toggleCheckboxDrone()}}/><br></br><br></br>
            </span></div>) :  (<div className='favorite'><span></span></div>)}
            {this.state.house? (<div className='standardClick'><span>Deluxe Drone Package&nbsp; $1000
            <input type="button" className='removebuttons' value='REMOVE' onClick={()=> {this.toggleCheckboxHouse()}}/><br></br><br></br>
            </span></div>) :  (<div className='favorite'><span></span></div>)}</div>
            </div>
            <div className="orderTotal">Total: ${this.state.total}.00 </div>
            <br></br>
            <div className='checkout-button'>
          <Link to='/cart' className='cart'>CHECK OUT</Link>
      </div>
        </div>
        </div>
        <div className='basic-package-description'>
          <div classname='quote'>Great directors can understand the staging in such a way that can make a scene come alive. 
            <br></br>
            <center>Others have a certain way of pacing the scene.</center>
            <br></br>
            <center><b>Al Pacino</b> </center></div>
        </div>
  <div className= 'wrap'>
  <div className='box boxOne'></div>
  <div className='box boxTwo'>
        <h2 className='price-titles'><center>BASIC STAGING PACKAGE</center></h2>
        <div className='basic-stuff'>
          <b> <font color='lightcoral'>INCLUDES</font> </b> - Staging with furniture in the Living Room, Dining Area, Kitchen, Master Bedroom, Master Bathroom, and Guest Bathroom.
          <br></br>
         <div> - Setup Deposit |<b><font color='lightcoral'> $600</font></b> </div>
          <br></br>
          <div>- Paid at closing | &nbsp;<b><font color='lightcoral'>$1800</font></b> ( includes takedown w/ up to 3 months inventory rental )</div>
          <br></br>
          <div> - Additional rental fee after first 3 months | &nbsp;<b><font color='lightcoral'>$400</font></b> / paid monthly</div>
          <br></br>
          <div> - Consultation |<b> &nbsp;<font color='lightcoral'>75$</font></b> (price goes up if 100 mi. outside of Salt Lake City)</div>
  </div>
  </div>
  <div className='box boxThree'>
    <h2 className='price-titles'><center>STANDARD PHOTOGRAPHY</center></h2>
    <h1 className='price-coral'>$150</h1>
    <br></br>
      <div className='description'><center>Standard lighting of Interior & exterior photography of the home. 
      Including up to 25 images.</center></div>
      <div className='clickbuttoncontainer'>
      <input type="button" className='clickbuttons' value='ADD TO CART' onClick={()=> {this.toggleCheckboxStandard()}}/>
  </div>
  </div>
  <div className='box boxFour'>
    <h2 className='price-titles'><center>TWILIGHT PHOTOGRAPHY</center></h2>
    <h1 className='price-coral'>$350</h1>
    <br></br>
    <div className='description'><center>Dusk photography of interior & exterior of the home. 
      Including up to 50 images. </center></div>
      <input type="button" className='clickbuttons' value='ADD TO CART' onClick={()=> {this.toggleCheckboxTwilight()}}/>
  </div>
  <div className='box boxFive'></div>
  <div className='box boxSix'></div>
  <div className='box boxSeven'>
  <h2 className='price-titles'><center>BASIC DRONE PHOTOGRAPHY</center></h2>
    <h1 className='price-coral'>$350</h1>
    <br></br>
    <div className='description'><center>Video of exterior and surrounding area of property. 
      Includes music license, video and audio editing.</center></div>
      <input type="button" className='clickbuttons' value='ADD TO CART' onClick={()=> {this.toggleCheckboxDrone()}}/>
  </div>
  <div className='box boxEight'>
    <h2 className='price-titles'><center>DELUXE DRONE PHOTOGRAPHY</center></h2>

    <font color='lightcoral'>Starting at</font>
    <h1 className='price-coral'>$1000</h1>
    <br></br>

    <div className='description'><center>Interior & exterior video including music license, video & audio editing. 
      Voiceover & text, along with high end vehicles as props included.</center></div>
      <input type="button" className='clickbuttons' value='ADD TO CART' onClick={()=> {this.toggleCheckboxHouse()}}/>
  </div>
  <div className='box boxNine'>
          <h2 className='price-titles'><center>FULL INTERIOR DESIGN PACKAGE</center></h2>
          <div><font color='lightcoral'>INCLUDES</font></div>
          <br></br>
          <div className='description'><center>
          Our professional design team can help with interior design needs for Businesses, Residential, New Builds, Parade of Homes, etc.</center>
          <br></br>
          - Interior Design Consultation | &nbsp;<b><font color='lightcoral'>$75/hr</font></b>
          </div>
        <br></br>
        <br></br>
          <div className="contact-link">- <Link to='/contacts' className='nav-contacts'> <b>CONTACT US</b></Link></div> for pricing

  </div>
  </div>
  <Footer />
  </div>
  );
  }
}

export default Prices;