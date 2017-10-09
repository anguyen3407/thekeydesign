import React, { Component } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

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
          <img className = 'firstpic' src='https://i.imgur.com/r4bXTwR.jpg' width='100%' height='100%' alt='alpine-harvest'/>
          <Link to="/harvest" className="overlay">
    <div className="text">Alpine Harvest</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/gEGnDta.jpg' width='100%' height='100%' alt='hatfield'/>
          <Link to='/hatfield' className="overlay">
    <div className="text">Hatfield</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/8ljvLWG.jpg' width='100%' height='100%' alt='alpine-westgate'/>
          <Link to ='/westgate' className="overlay">
    <div className="text">Alpine Westgate</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'greypic' src='https://i.imgur.com/EQR7ftB.jpg' width='100%' height='100%' alt='cindy-4300'/>
          <Link to ='/cindy' className="overlay">
    <div className="text">Cindy 4300</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/TyBjFHC.jpg' width='100%' height='100%' alt='anderson-ryan'/>
          <Link to ='/anderson' className="overlay">
    <div className="text">Anderson-Ryan</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/q3Qr7k7.jpg' width='100%' height='100%' alt='ann-wallace'/>
          <Link to ='/ann'className="overlay">
    <div className="text">Ann-Wallace</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/briwz4C.jpg' width='100%' height='100%' alt='jackson'/>
          <Link to='/jackson' className="overlay">
    <div className="text">Jackson</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/VFv15Rt.jpg' width='100%' height='100%' alt='crowley'/>
          <Link to ='/crowley' className="overlay">
    <div className="text">Crowley</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/MEVQyGS.jpg' width='100%' height='100%' alt='cindy-nicholaus'/>
          <Link to='/nicholaus' className="overlay">
    <div className="text">Nicholaus</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/sQixIHd.jpg' width='100%' height='100%' alt='enoch'/>
          <Link to='/enoch' className="overlay">
    <div className="text">Enoch</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/3qkJzPc.jpg' width='100%' height='100%' alt='alpine-miller'/>
          <Link to ='/miller' className="overlay">
    <div className="text">Alpine Miller</div>
  </Link>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/4LlnlHT.jpg' width='100%' height='100%' alt='rowe-sacs'/>
          <Link to='/sacs' className="overlay">
    <div className="text">Rowe Sacs</div>
  </Link>
        </div>

  {/* stopped at scott-sesoto */}
        {/* <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/VFv15Rt.jpg' width='100%' height='100%' alt='crowley'/>
        </div>
        <div className="Pic">
          <img className = 'firstpic' src='https://i.imgur.com/MEVQyGS.jpg' width='100%' height='100%' alt='cindy-nicholaus'/>
        </div> */}




<div className='scroll-contain'>
  <a href="top" className='scroll'>scroll to top</a>
  </div>
  </div>
  < Footer />
</div>

    );
  }
}

export default Home;










