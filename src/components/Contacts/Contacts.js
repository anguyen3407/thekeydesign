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
      alert('Email Sent!', err);
    })
  }



  render() {

    return (

      <div className='Contacts'>
            <Nav/>
        <div className='ContactsImgContainer'> 
            <h1 className='contacts-words'>CONTACT US</h1>
            <div className='contactsBox'>
              </div>
              <div className='giant-box'>
              <textarea
              rows="14" cols="10" wrap="hard"
                placeholder='Your message here'
                type='text'
                className='contacts_box_container'
                value={this.state.message}
                onChange={(e) => { this.toggleMessage(e.target.value) }} />
                <div className='contacts_box_container2'>
                <input
                  type='text'
                  className='messagetextarea-container2-box2'
                  value={this.state.email}
                  onChange={(e) => { this.toggleEmail(e.target.value) }} />
                <input
                  placeholder='Your Email'
                  type='text'
                  className='messageInput-container2-box1'
                  value={this.state.user_email}
                  onChange={(e) => { this.toggleName(e.target.value) }} />
                <div className='messageInput-container2-box3'>
                  <button className='send-btn' onClick={()=>{
                    this.sendEmail()
                  }} >SEND</button>
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