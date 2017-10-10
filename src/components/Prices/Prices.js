import React, { Component } from 'react';
import './Prices.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../stripeKey';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Prices extends Component {
  constructor(){
    super()
  }

    onToken(token) {
      token.card = void 0;
      console.log('token', token);
      axios.post('http://localhost:3535/api/payment', { token, amount: 100} ).then(response => {
        alert('we are in business')
      });
    }

  render() {

  


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
  <div className='boxTwoBackground'></div>
  <div classname='receipt-checkout'>
  <div className='checkout-btn'>
<StripeCheckout
          token={this.onToken}
          stripeKey={ stripe }
          amount={.00}
        />
        </div>
  </div>
</div>
</div>
<div className='box boxThree'>
<div className='box-Three-container'>
 
<br></br>
{/* <input
                            type="checkbox"
                            value={label}
                            checked={isChecked}
                            onChange={this.toggleCheckbox}
                        /> */}
  &nbsp;standard photography | &nbsp;<b>$150</b> &nbsp; &nbsp; &nbsp;
  
  
  <br></br>
  <input type='checkbox' value='true' name='checkbox'></input> 
  &nbsp;twilight photography | &nbsp;<b>$350</b> &nbsp; &nbsp; &nbsp;
  
   <br></br>
  <input type='checkbox' value='true' name='checkbox'></input> 
  &nbsp;drone photography | &nbsp;<b>$250</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <br></br>
  <input type='checkbox' value='true' name='checkbox'></input>
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
</div>
</div>
  );
  }
}

export default Prices;