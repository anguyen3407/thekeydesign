import React, { Component } from 'react';
import axios from 'axios';
import './admin.css'


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

        var getID = this.state.invoice_data.map((f)=>{
            if(f.id){
                return(
                    <div>
                        <div>(f.id)</div>
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
            
            if(a.cleaning_photography){

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
            console.log (invoice.city_photography)
            if(invoice.city_photography){

                return(
                    <div>
                        <div>True</div>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <div>False</div>
                    </div>
                )
            }
        })

        var getState = this.state.invoice_data.map((c)=>{
            
            if(c.state_photography){

                return(
                    <div>
                        <div>True</div>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <div>False</div>
                    </div>
                )
            }
        })

        var getZip = this.state.invoice_data.map((d)=>{
            
            if(d.zip_photography){

                return(
                    <div>
                        <div>True</div>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <div>False</div>
                    </div>
                )
            }
        })

        var getAddress = this.state.invoice_data.map((e)=>{
            
            if(e.address_photography){

                return(
                    <div>
                        <div>True</div>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <div>False</div>
                    </div>
                )
            }
        })
               
    
      return (

    <div className="admin">
        <div className='id'>ID {getID}</div>

        <div className='standard'>Standard Photography{getStandard}</div>

        <div className='twilight'>Twilight Photography{getTwilight}</div>

        <div className='drone'>Drone Photography{getDrone}</div>

        <div className='houseCleaning'>House Cleaning{getCleaning}</div>

        <div className='city'>City{getCity}</div>

        <div className='state'>State{getState}</div>

        <div className='zip'>Zip{getZip}</div>

        <div className='street_address'>Street Address{getAddress}</div>
    </div>

    );
    }}

  export default Admin;
  