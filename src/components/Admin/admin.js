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

  
    render() {

        var getStandard = this.state.invoice_data.map((x)=>{
            if(x.standard_photography){
                return(
                    <div>
                        <input type="checkbox" checked="checked" value="123" name="checked"/>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <input type="checkbox" checked="false" value="123" name="not-checked"/>
                    </div>
                )
            }
        })

        var getTwilight = this.state.invoice_data.map((y)=>{
            
            if(y.twilight_photography){

                return(
                    <div>
                        <input type="checkbox" checked="checked" value="123" name="checked"/>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <input type="checkbox"  value="123" name="not-checked"/>
                    </div>
                )
            }
        })

        var getDrone = this.state.invoice_data.map((z)=>{
            
            if(z.drone_photography){

                return(
                    <div>
                        <input type="checkbox" checked="checked" value="123" name="checked"/>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <input type="checkbox"  value="123" name="not-checked"/>
                    </div>
                )
            }
        })
 
        var getCleaning = this.state.invoice_data.map((a)=>{
            
            if(a.cleaning){

                return(
                    <div>
                        <input type="checkbox" checked="checked" value="123" name="checked"/>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <input type="checkbox"  value="123" name="not-checked"/>
                    </div>
                )
            }
        })

        const individualName = this.state.invoice_data.map((name, i) =>{
            return (
                <div key={i}>
                <div>{name.firstname}</div>
                <div>{name.lastname}</div>
                <div>{name.emailAddress}</div>
                <div>{name.billing_address}</div>
                <div>{name.phone_number}</div>
                <div>{name.standard_photography ? (<input type="checkbox" checked="checked" value="123" name="checked"/>) : "Standard Photography"}</div>
                <div>{name.twilight_photography ? (<input type="checkbox" checked="checked" value="123" name="checked"/>) : "Twilight Photography"}</div>
                <div>{name.drone_photography ? (<input type="checkbox" checked="checked" value="123" name="checked"/>) : "Basic Drone Photography"}</div>
                <div>{name.cleaning ? (<input type="checkbox" checked="checked" value="123" name="checked"/>) : "Deluxe Drone Photography"}</div>
                <div>{name.city}</div>
                <div>{name.state}</div>
                <div>{name.zip}</div>
                <div>{name.street_address}</div>
                

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
       
{individualName}

        <div className='admin-boxes'>
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
            {getCleaning}</div>
    </div>

    );
    }}

  export default Admin;
  