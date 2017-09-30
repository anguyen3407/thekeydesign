import React, { Component } from 'react';
import './Prices.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../stripeKey';
import axios from 'axios';

class Prices extends Component {
  constructor(){
    super()
    this.state={
      basic: [],
      standard: [],
      twilight: [],
      drone: [],
      houseCleaning: []
    }
  }

  componentDidMount() {
    axios.get('api/product/basic').then(res => {
      this.setState({
        basic: res.data
      })
    })

    axios.get('api/product/standard').then(res => {
      this.setState({
        standard: res.data
      })
    })

    axios.get('api/product/twilight').then(res => {
      this.setState({
        twilight: res.data
      })
    })

    axios.get('api/product/drone').then(res => {
      this.setState({
        drone: res.data
      })
    })

    axios.get('api/product/houseCleaning').then(res => {
      this.setState({
        houseCleaning: res.data
      })
    })
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
<div className='app-container'>
  <div className='basic-container'>
    <h1>{this.state.basic.product_name}</h1>
    <div className = 'includes'>
    <h4> - includes</h4>
        staging with furniture in the Living Room, Dining Area, Kitchen, Master Bedroom, Master Bathroom, and Guest Bathroom.
    <br></br>
    - Setup Deposit | $600
    <br></br>
    - Paid at closing | $1800 ( includes takedown w/ up to 3 months inventory rental )
    <br></br>
    - Additional rental fee after first 3 months | $400 / paid monthly
    </div>
  </div>
  <div className='receipt'>
  <div className='receipt-background'>
  </div>
  <div className='checkout-btn'>
<StripeCheckout
          token={this.onToken}
          stripeKey={ stripe }
          amount={.00}
        />
        </div>
</div>

</div>
<div className='second-container'>
  <div className='add-ons'>
  + standard photography | $150
  <br></br>
  + twilight photography | $350
  <br></br>
  + drone photography | $250
  <br></br>
  + house cleaning | $40/hr
  </div>
<div className='full-container'>
  </div>
</div>
</div>
  );
  }
}

export default Prices;