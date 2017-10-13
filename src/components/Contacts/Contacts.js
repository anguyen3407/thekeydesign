import React, { Component } from 'react';
import './Contacts.css';
import Footer from '../Footer/Footer';
import axios from 'axios';

class Contacts extends Component {
  constructor() {
    super()
    this.state = {
      user_email: "",
      email: 'a.nguyen8778@yahoo.com',
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
      alert('Email Sent', err);
    })
  }



  render() {

    return (

      <div className='Contacts'>
        <div className="emptyspace"></div>
        <div className='map-box'>
          <iframe className='iframe'
            width="100%"
            height="400"
            title="google-map"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD8lEgqTZPBwI4VRUM6YoGc8_S6lvziCSc&q=Salt+Lake+City,+UT/" allowFullScreen>
          </iframe>
          <div className='contact-box-container'>
            <div className='contact-box'>
              <img src='http://www.aberke.com/static/img/mail-black-white.png' width='30px' height='30px' alt='' />info@thekeydesign.com
  </div>
          </div>
        </div>
        <div className='message-box-container'>
          <div className='message-box'>
            <h1>SEND A MESSAGE</h1>
            <div className='messageInput'>
              <input
                placeholder='Your message here'
                type='text'
                className='messageInput-container'
                value={this.state.message}
                onChange={(e) => { this.toggleMessage(e.target.value) }} />
              <div className='messageInput-container2'>
              <input
                  type='text'
                  className='messageInput-container2-box2'
                  value={this.state.email}
                  onChange={(e) => { this.toggleEmail(e.target.value) }} />
                <input
                  placeholder='Your Email'
                  type='text'
                  className='messageInput-container2-box1'
                  value={this.state.user_email}
                  onChange={(e) => { this.toggleName(e.target.value) }} />
                <div className='messageInput-container2-box3'>
                  <button src='send-btn' onClick={()=>{
                    this.sendEmail()
                  }} >SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default Contacts;