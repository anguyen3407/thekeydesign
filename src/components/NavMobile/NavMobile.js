import React, { Component } from 'react';
import './NavMobile.css';
import { Link } from 'react-router-dom';


class NavMobile extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className='Nav-Mobile'>
      <div className='mobileNav'>
        <div className='mobileNav-container'>
            <div class="dropdownMobile">
  <div className="dropdownMobile"> <img src='https://i.imgur.com/tFLr8jN.png' width='52px' height='45px' alt=''/>
  <div className="dropdownMobile-content">
  <Link to='/HomeMobile' className='HomeMobile'>&nbsp; &nbsp; &nbsp;Home&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Link>
  <br></br>
  <Link to='/AboutMobile' className='AboutMobile'>&nbsp; &nbsp; &nbsp;About&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Link>
  <br></br>
  <Link to='/ContactsMobile' className='ContactsMobile'>&nbsp; &nbsp; &nbsp;Contacts&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Link>
  <br></br>
  <Link to='/PricesMobile' className='PricesMobile'>&nbsp; &nbsp; &nbsp;Prices&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Link>
  </div>
  </div>
  </div>
        </div>
        </div>
    </div>

  );
  }
}

export default NavMobile;