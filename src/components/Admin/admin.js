import React, { Component } from 'react';
import axios from 'axios';
import './admin.css';
import { Link } from 'react-router-dom';


class Admin extends Component {
    constructor () {
    super () 
     this.state={
        invoice: '',
        invoice_data: []
          }
        
      }

    componentDidMount() {
        axios.get('/api/admin', 
            ).then((response) => {
                console.log(response)
                this.setState({
                    invoice_data: response.data
                })
            })
    }

    removeFromCart(deleteId) {
        axios.delete(`/api/admin/${deleteId}`).then((res)=> {
            this.setState({
                invoice_data: res.data
            })
        }).catch(err => console.log(err))
    }

  
    render() {

        const individualName = this.state.invoice_data.map((name, i) =>{
            console.log(name.twilight_photography)
            return (
                <div key={i}>
                    {i}
                    <br/>
                <div>First Name: {name.firstname}</div>
                <div> Last Name: {name.lastname}</div>
                <div> Email Address: {name.emailAddress}</div>
                <div> Billing Address: {name.billing_address}</div>
                <div> Phone Number: {name.phone_number}</div>
                <div>Add-Ons:
                 
                    <div>{name.standard_photography ? null : "Standard Photography"} </div>
                    <div>{name.twilight_photography ? null : "Twilight Photography"} </div>
                    <div>{name.drone_photography ? null : "Basic Drone Photography"} </div>
                    <div>{name.cleaning ? null : "Deluxe Drone Photography"} </div>
                </div>
                <div>City: {name.city}</div>
                <div>State: {name.state}</div>
                <div>Zip: {name.zip}</div>
                <div>Street Address: {name.street_address}</div>
                <button onClick = {() => {this.removeFromCart(name.id)}}> DELETE
                </button>
                </div>
            )
        })
               
    
      return (

    <div className="admin">
        <div className= 'Nav-bar'>
    <div className='nav-container'>
    <Link to='/' className='nav-home'>HOME</Link>
      <Link to='/whatWeAre' className='nav-who'> ABOUT </Link>
      <Link to='/contacts' className='nav-contacts'>CONTACTS</Link>
      <Link to='/prices' className='nav-prices'>PRICES / SERVICES</Link>
      <Link to='/' className='nav-testimonials'>TESTIMONIALS</Link>
      <a href={'/auth/logout'}><button className='logout-buttontheme'> <font face='Lato'>LOGOUT</font></button> </a>
      <div className = 'insta-img'>
      <a href="https://instagram.com/thekeydesignstaging" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-5x"> 
        <img src = "https://i.imgur.com/dO8XeAB.png" width='21px' height="20px" alt='instagram'/> </i></a>
      <a href="https://www.facebook.com/TheKeyDesign1/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook fa-5x">
        <img src = "https://i.imgur.com/gogxbMd.png" width='21px' height="20px" alt='facebook'/></i></a>
    </div>
  </div>
</div>

<div className=''>      
{individualName}
</div>
        {/* <div className='admin-boxes'>
        <h4>Standard</h4>
            {getStandard}</div>

        <div className='admin-boxes'>
        <h4>Twilight</h4>
            {getTwilight}</div>

        <div className='admin-boxes'>
        <h4>Basic Drone</h4>
            {getDrone}</div>

        <div className='admin-boxes'>
        <h4>Deluxe Drone</h4>
            {getCleaning}</div> */}
    </div>

    );
    }}

  export default Admin;
  