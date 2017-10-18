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
        var getFirstName = this.state.invoice_data.map((l)=>{
            if(l.firstname){
                return(
                    <div>
                        <div>
                            {l.firstname}
                        </div>
                    </div>
                )
            }
        })
        var getLastName = this.state.invoice_data.map((r)=>{
            if(r.lastname){
                return(
                    <div>
                        <div>
                            {r.lastname}
                        </div>
                    </div>
                )
            }
        })
        var getEmailAddress = this.state.invoice_data.map((w)=>{
            if(w.email_address){
                return(
                    <div>
                        <div>
                            {w.email_address}
                        </div>
                    </div>
                )
            }
        })
        var getBillingAddress = this.state.invoice_data.map((p)=>{
            if(p.billing_address){
                return(
                    <div>
                        <div>
                            {p.billing_address}
                        </div>
                    </div>
                )
            }
        })
        var getPhoneNumber = this.state.invoice_data.map((u)=>{
            if(u.phone_number){
                return(
                    <div>
                        <div>
                            {u.phone_number}
                        </div>
                    </div>
                )
            }
        })







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

        var getCity = this.state.invoice_data.map((invoice)=>{
            if(invoice.city){
                return(
                    <div>
                        <div>
                            {invoice.city}
                        </div>
                    </div>
                )
            }
        })

        var getState = this.state.invoice_data.map((c)=>{
            
            if(c.state){
                return(
                    <div>
                        <div>
                            {c.state}
                        </div>
                    </div>
                )
            }
        })

        var getZip = this.state.invoice_data.map((d)=>{
            
            if(d.zip){
                return(
                    <div>
                        <div>
                            {d.zip}
                        </div>
                    </div>
                )
            }
        })

        var getAddress = this.state.invoice_data.map((e)=>{
            
            if(e.street_address){
                return(
                    <div>
                        <div>
                            {e.street_address}
                        </div>
                    </div>
                )
            }
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
        <div className='admin-boxes'>
            <h4>First </h4>
            {getFirstName}</div>

        <div className='admin-boxes'>
        <h4>Last</h4>
             {getLastName}</div>

        <div className='admin-boxes'>
        <h4>Email Address</h4> 
        {getEmailAddress}</div>

        <div className='admin-boxes'>
        <h4>Billing Address</h4>
        {getBillingAddress}</div>

        <div className='admin-boxes'> 
        <h4># </h4>
        {getPhoneNumber}</div>

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

        <div className='admin-boxes'>
        <h4>City</h4>
            {getCity}</div>

        <div className='admin-boxes'>
        <h4>State</h4>
            {getState}</div>

        <div className='admin-boxes'>
        <h4>Zip</h4>
            {getZip}</div>

        <div className='admin-boxes'>
        <h4>Street Address</h4>
            {getAddress}</div>
    </div>

    );
    }}

  export default Admin;
  