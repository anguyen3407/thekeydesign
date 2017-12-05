import React, { Component } from 'react';
import './Contacts.css';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Nav from '../Nav/Nav';

class Contacts extends Component {
  constructor() {
    super()
    this.state = {
      user_email: "",
      email: 'info@thekeydesign.com',
      message: ""
    }
  }

  toggleName(user_email) {
    this.setState({
      user_email
    });
  }

  toggleEmail(email) {
    this.setState({
      email
    });
  }

  toggleMessage(message) {
    this.setState({
      message
    });
  }


  sendEmail() {
    axios.post('/api/sendEmail', {
      'user_email': this.state.user_email,
      'email': this.state.email,
      'message': this.state.message
    }).catch((err) => {
      console.log(err);
      alert('Email Sent!', err);
    })
  }



  render() {

    return (
      <div className='ContactsPage'>
            <Nav/>
            <div className='contactsContainer'>
            <div className='contactimage'>
              <div className='contactimgbox'>
              <div className='img-flex'>
              <div className='contactus'>CONTACT US</div>
              <div className='imgs'> <img src='https://imgur.com/vTKug78.jpg' width='100%' height='100%' alt=''/></div>
                  {/* <div className='flex1'> </div> */}
                  {/* <div className='flex2'></div>
                  <div className='flex3'></div>
                  <div className='flex4'></div>
                  <div className='flex5'></div>
                  <div className='flex6'></div>
                  <div className='flex7'></div>
                  <div className='flex8'></div>
                  <div className='flex9'></div> */}
                </div>
              </div>
            </div>
            <div className='contactinfo'>
              <div className='contactinfobox'>
              <div className='myemail'>
              <input
                  type='text'
                  className='messagetextarea-container2-box2'
                  value={this.state.email}
                  onChange={(e) => { this.toggleEmail(e.target.value) }} />
              </div>
              <div className='enteremail'>
                <input
                  placeholder='Email'
                  type='text'
                  className='messageInput-container2-box1'
                  value={this.state.user_email}
                  onChange={(e) => { this.toggleName(e.target.value) }} />
              </div>
                <textarea
                rows="14" cols="10" wrap="hard"
                  placeholder='Message'
                  type='text'
                  className='contacts_box_container'
                  value={this.state.message}
                  onChange={(e) => { this.toggleMessage(e.target.value) }} />
                  <button className='send-btn' onClick={()=>{
                    this.sendEmail()
                    }} >SEND
                  </button>
              </div>
            </div>
            </div>
        <Footer />
      </div>

    );
  }
}

export default Contacts;