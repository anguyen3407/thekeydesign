import React, { Component } from 'react';
import './What.css';


class What extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className= 'hi'>
  <div className='team-container'>
    <div className="team"> OUR TEAM
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' className='img1'/>
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' className='img2'/>
      <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png'className='img3'/>
    </div>
  </div>
  <div className='video-box'>
<iframe src="https://player.vimeo.com/video/235287002" className='video' width="610" height="340" frameBorder="0" allowFullScreen></iframe>
</div>
</div>

  );
  }
}

export default What;





