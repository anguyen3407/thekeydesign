import React, { Component } from 'react';
import './Who.css';
import Footer from '../Footer/Footer';


class Who extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className= 'hey'>
  <div className='team-container'>
    <div className="team"> OUR TEAM
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' className='img1' alt=''/>
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' className='img2' alt=''/>
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png'className='img3' alt=''/>
    </div>
  </div>
<div className='video-container'>
  <div className='video-box'>
<iframe src="https://player.vimeo.com/video/235287002" className='video' width="520" height="290" frameBorder="0" allowFullScreen></iframe>
<div className="what-text">
<h1 className='what-h1'>What We Do</h1>
<h2 className='what-h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
</div>
</div>
</div>
<Footer />
</div>


  );
  }
}

export default Who;





