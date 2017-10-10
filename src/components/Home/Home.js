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
<div class="dropdown">
  <div className="dropdown">CHOOSE CATEGORY <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/10897-200.png' width='10px' height='10' alt=''/>
  <div className="dropdown-content">
  <Link to='/kitchen' className='Kitchen'>Kitchen</Link>
  <br></br>
  <Link to='/bedroom' className='Bedroom'>Bedroom </Link>
  <br></br>
  <Link to='/bathroom' className='Bathroom'>Bathroom</Link>
  <br></br>
  <Link to='/living-family-room' className='livingRoom'>Living/Family Room</Link>
  </div>
  </div>
  </div>

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



  <div className='Testimonials-container'>
    <div className='Testimonials'> - PEOPLE LOVE US - 
      <div className='testmonial-box'>
      <div className='testimonial-text'> 
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/19279-200.png' width='40px' height='40px' className='quote-left'/> 
       <h4>  I’ve been a Realtor for many years. The Key Design has been staging most of my listings since the opened their business. 
         The Key Design designers have an eye for beauty and can make a drab property spring to life with their staging.  Our chances of selling are dramatically increased due to their amazing service and talent. </h4>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/19278-200.png' width='40px' height='40px' className='quote-right'/> 
        </div>
        <div className='testimonial-name'> - Monica McQueen | The McQueen Team</div>
        <br></br>
      <div className='test-image-container'>
       <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Biochem_reaction_arrow_reverse_NNNN_horiz_med.svg/2000px-Biochem_reaction_arrow_reverse_NNNN_horiz_med.svg.png'width='50px' height='50px' className='arrow-left'/> 
        &nbsp; &nbsp; <div className='testimonial-photo'> <img src='https://i.imgur.com/pSYf8Hu.png'width='100%' height='100%'/> </div>  &nbsp; &nbsp;    
        <img src='https://userscontent2.emaze.com/images/6e6e87f6-3d18-4d26-af06-c3b9256010d5/30571f71653716854bd1385fa485ae4a.png'width='50px' height='50px' className='arrow-right'/>
      </div>
      </div>
    </div>
    </div>


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










