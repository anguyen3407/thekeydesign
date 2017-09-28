import React, { Component } from 'react';
import './Prices.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../stripeKey';
import axios from 'axios';

class Prices extends Component {
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
<div className='app.container'>
  <div className='app'>
  <div className='basic-container'></div>
  <div className='receipt'>
  <div className='receipt-background'>
  </div>
</div>
<StripeCheckout
          token={this.onToken}
          stripeKey={ stripe }
          amount={.00}
        />
</div>
<div className='second-container'>
  <div className='add-ons'>
  </div>
<div className='full-container'>
  </div>
</div>
</div>
</div>
  );
  }
}

export default Prices;