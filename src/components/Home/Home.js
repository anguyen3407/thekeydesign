import React, { Component } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';

class Home extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (
<div className= 'App'>
<div className = 'banner'>
<div className = 'banner-img'>
<img src="https://i.imgur.com/tUJTT0e.png" width="250" height="180" alt="The Key Design"/>
</div>
<h2 className = 'logo-name'>HOME STAGING</h2>
</div>

  <div className="Choose">CHOOSE CATEGORY <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/10897-200.png' width='10px' height='10' alt=''/></div>

  <div className="Pictures">
  <div className="Pic">
  <img className = 'firstpic' src='https://i.imgur.com/hBN2K4s.jpg' width='100%' height='100%' alt=''/>
</div>
<div className="Pic">
<img className = 'greypic' src='https://i.imgur.com/Dzjystk.jpg' width='100%' height='100%' alt=''/>
</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/XHXB8X1.jpg' width='100%' height='100%' alt=''/>

</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/UC3vSRO.jpg' width='100%' height='100%' alt=''/>

</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/nzHdZA3.jpg' width='100%' height='100%' alt=''/>

</div>
<div className="Pic">
<img className = 'firstpic' src='https://i.imgur.com/keZ7Txh.jpg' width='100%' height='100%' alt=''/>
</div>
  </div>
  < Footer />
</div>

    );
  }
}

export default Home;










