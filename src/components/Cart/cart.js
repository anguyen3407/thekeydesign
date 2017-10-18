import React, { Component } from 'react';
import './cart.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class Cart extends Component {
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
      zip: "", 
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

    toggleFirstName(e) {
      this.setState({firstName: e.target.value})
   }

    toggleLastName(e) {
      this.setState({lastName: e.target.value})
      }

    toggleEmail(e) {
      this.setState({email_address: e.target.value})
    }

    toggleBilling(e) {
      this.setState({billing_address: e.target.value})
    }

    togglePhone(e) {
      this.setState({phone_number: e.target.value})
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
    <Nav/>
    <div className ="price-banner-container">
    <div className='stripe-inputs'><div className='checkWords'>CHECKOUT</div></div>
      <div className='checkout-img-container'>
        <img className='checkoutimg' src='https://i.imgur.com/38ZRz9f.jpg' width='100%' height='100%'/>
      </div>
      <div className='checkout-empty'>
      <div>First Name <input className='inputBoxes' onChange={(e)=> {this.toggleFirstName(e)}}/> 
    Last Name <input className='inputBoxes' onChange={(e)=> {this.toggleLastName(e)}}/></div> 
    <div>Email Address <input className='inputBoxes' onChange={(e)=> {this.toggleEmail(e)}}/> </div>
    <div>Billing Address <input className='inputBoxes' onChange={(e)=> {this.toggleBilling(e)}}/> 
    Phone Number <input className='inputBoxes' onChange={(e)=> {this.togglePhone(e)}}/> </div>

      <div>City <input className='inputBoxes' onChange={(e)=> {this.toggleCity(e)}}/> 

      State <input className='inputBoxes' onChange={(e)=> {this.toggleState(e)}}/></div>

      <div>Zip <input className='inputBoxes' onChange={(e)=> {this.toggleZip(e)}}/>

      Staging Address <input className='inputBoxes' onChange={(e)=> {this.toggleAddress(e)}}/></div>
      <div className='striper'>
      <StripeCheckout
                    token={this.onToken}
                    stripeKey={ process.env.REACT_APP_STRIPE_SECRETKEY }
                    amount={67500}
                    className='striperrr'
          />
          </div>
      </div>
  
         
      </div>
     
  </div>
  );
  }
}

export default Cart;