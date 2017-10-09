import React, { Component } from 'react';
import './What.css';
import Footer from '../Footer/Footer';
import video from '../../video/The Key Design Promo - Medium.mp4';

class What extends Component {
  // constructor () {
  //   super () 

  //       }
  
  

  render() {

    return (

<div className= 'hi'>

<div className='b-container'>
<video loop muted preload='auto' autoPlay width='100%' height='40%'>
<source src={video} type="video/mp4"/>
</video>

  </div>

  <div className='team-container'>
    <div className="team"> 
      <h1 className='h1'>OUR TEAM</h1>
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' className='img1' alt=''/>
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' className='img2' alt=''/>
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png'className='img3' alt=''/>
    </div>
  </div>
<div className='video-container'>
  <div className='video-box'>
<div className="what-text">
<h1 className='what-h1'>What We Do</h1>
<h2 className='what-h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
</div>
</div>
</div>
<div className='break'>
      </div>
<Footer />
</div>

  );
  }
}

export default What;





