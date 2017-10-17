import React, { Component } from 'react';
import './Prices.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../stripeKey';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Prices extends Component {
  constructor(){
    super() 
    this.state = {
      standard: false,
      twilight: false,
      drone: false,
      house: false,
      total: 675,
      city: "",
      state: "",
      zip: "", 
      street_address: ""
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
        this.setState({drone: !this.state.drone, total: this.state.total + 250})
      }
      else {
        this.setState({drone: !this.state.drone, total: this.state.total - 250})
      }
    }

    toggleCheckboxHouse() {
      if (this.state.house === false) {
        this.setState({house: !this.state.house, total: this.state.total + 40})
      }
      else {
        this.setState({house: !this.state.house, total: this.state.total - 40})
      }
    }

    toggleCity(e) {
        this.setState({city: e.target.value})
    }

    toggleState(e) {
      this.setState({state: e.target.value})
  }

    toggleZip(e) {
      this.setState({zip: e.target.value})
  }

    toggleAddress(e) {
      this.setState({street_address: e.target.value})
  }

  render() {

  console.log(this.state)


    return (
  <div className= 'Prices'>
  <div className= 'wrap'>
  <div className='box boxOne'> 
      <div className='box-One-container'>
          <h1>Basic Staging Package</h1>
                <div className = 'includes'>
                    <b> INCLUDES </b> - Staging with furniture in the Living Room, Dining Area, Kitchen, Master Bedroom, Master Bathroom, and Guest Bathroom.
                    <br></br>
                    - Setup Deposit | &nbsp;<b>$600</b>
                    <br></br>
                    - Paid at closing | &nbsp;<b>$1800</b> ( includes takedown w/ up to 3 months inventory rental )
                    <br></br>
                    - Additional rental fee after first 3 months | &nbsp;<b>$400</b> / paid monthly
                    <br></br>
                    - Consultation |<b> &nbsp;75$</b> (price goes up if 100 mi. outside of Salt Lake City)
                </div>
  </div>
  </div>
  <div className='box boxTwo'> 
  <div className='box-Two-container'>
    <div className='boxTwoBackground'>
      City <input onChange={(e)=> {this.toggleCity(e)}}/> 

      State <input onChange={(e)=> {this.toggleState(e)}}/>

      Zip <input onChange={(e)=> {this.toggleZip(e)}}/>

      Address <input onChange={(e)=> {this.toggleAddress(e)}}/>

      <br></br>
      Total:    ${this.state.total}.00

    </div>
    <div classname='receipt-checkout'>
      <div className='checkout-btn'>
          <StripeCheckout
                    token={this.onToken}
                    stripeKey={ stripe }
                    amount={67500}
          />
      </div>
    </div>
  </div>
  </div>
  <div className='box boxThree'>
  <div className='box-Three-container'>
      <br></br>
      <input type="checkbox" onChange={()=> {this.toggleCheckboxStandard()}}/>
      &nbsp;standard photography | &nbsp;<b>$150</b> &nbsp; &nbsp; &nbsp;
      
      <br></br>
      <input type="checkbox" onChange={()=> {this.toggleCheckboxTwilight()}}/>
      &nbsp;twilight photography | &nbsp;<b>$350</b> &nbsp; &nbsp; &nbsp;
      
      <br></br>
      <input type="checkbox" onChange={()=> {this.toggleCheckboxDrone()}}/>
      &nbsp;drone photography | &nbsp;<b>$250</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <br></br>
      <input type="checkbox" onChange={()=> {this.toggleCheckboxHouse()}}/>
      &nbsp;house cleaning | &nbsp;<b>$40/hr</b>
   
    
  </div>
  </div>
  <div className='box boxFour'> 
  <div className='box-Four-container'>
      <div className='includes'>
          <h1>Full Interior Design Package</h1>
          INCLUDES-
          <br></br>
          Our professional design team can help with interior design needs for Businesses, Residential, New Builds, Parade of Homes, etc.
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp;- Interior Design Consultation | &nbsp;<b>$75/hr</b>
          <br></br>
          <Link to='/contacts' className='nav-contacts'> - <b>CONTACT US</b></Link> for pricing
      </div>
      </div>
  </div>
  <div className='box boxFive'>
    <div className='box-Five-container'>
    <iframe className='iframe'
      width='45.4%'
      height='316px'
            title="google-map"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD8lEgqTZPBwI4VRUM6YoGc8_S6lvziCSc&q=Salt+Lake+City,+UT/" allowFullScreen>
          </iframe>
  </div>
  </div>
  </div>
  </div>
  );
  }
}

export default Prices;