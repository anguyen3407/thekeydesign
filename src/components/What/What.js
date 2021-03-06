import React, { Component } from 'react';
import './What.css';
import Footer from '../Footer/Footer';
import video from '../../video/The Key Design Promo - Medium.mp4';
import Nav from '../Nav/Nav';

class What extends Component {
  // constructor () {
  //   super () 

  //       }
  
  

  render() {

    return (
<div className='what-hi'>
<Nav/>
<div className= 'heyaaa'>

<div className='emptyaboutbox'></div>
<div className='about'>
  <div className='whitebehindvideo'> 
      <div className='thewhitebox'></div>
  </div>
  <div className='about-video'>
  <video loop muted preload='auto' autoPlay width='100%' height='100%'>
<source src={video} type="video/mp4"/>
</video>
  </div>
  <div className='about-empty'>
    <div>MEET OUR <font color='tan'>TEAM</font></div>
    </div>
  <div className='about-clear'></div>

</div>
<div className='ABOUTUSCONTAIN'>
      <br></br>
      <div className='allemployees'>
        <div className='cindy-name'>CINDY KASTELER-MELLOR</div>
      <div className='img1-container'>
        <div className='img1border'><img src='https://i.imgur.com/5sNdSMY.png' className='img1' width='180px' height='245px'alt=''/></div>
        <div className='team-cindy'>Cindy studied Interior and Fashion Design at Utah State University where her talent was noticed and she was awarded a full scholarship (Professors Choice Award) for her outstanding work at the Historical Costume Museum. 
        Her entrepreneur spirit is manifested into the multiple successful business that she has built and sold. 
        She has been a real estate investor for almost 16 years as she worked for the original owners of The Key Designers Home Staging for three years and then joined forces with Lisa and Courtney to purchase the company. 
        She enjoys putting together original designs for individuals, as well as, home builders and commercial projects.</div>
      </div>
      <div className='lisa-name'>LISA WHEAT</div>
     <div className='img2-container'> 
      <div className='team-lisa'> Lisa's design career began early on in a family-owned business in the international waterpark arena, designing waterslides and themed water attractions. 
        She then ventures with her father in an innovative furniture design business which took her to Southern California to open and manage a designer furniture showroom. 
        Later, she continued her career and became the Executive Directer of the International Design Center consulting with hundreds of residential and commercial vendors in the builder and interior design communities. 
        She now directs her attention and passion in design and business development to The Key Design with her two "dream team" talented partners. 
        Once seeing this as a great industry with incredible opportunities, she has contributed in expanding and edifying this business to new horizons. </div>
        <div className='img2border'> <img src='https://i.imgur.com/AjZsdoN.png' className='img2'  width='180px' height='245px' alt=''/>  </div>
 
     </div>
     <div className='cindy-name'>COURTNEY CLARK</div>
     <div className='img3-container'>
     <div className='img3border'> <img src='https://i.imgur.com/ygtQDFm.png' className='img3' width='170px' height='235px' alt=''/></div>
       <div className='team-courtney'>Courtney has an extensive background in customer service, office management, sales and risk management. 
        She worked in the insurance industry for over nine years. She successfully managed the state licensing compliance department for over twenty agents. 
        She is not only skilled and talented in personal relations and outstanding sales, she manages and directs The Key Design Team and all of the moving pieces in the daily operations. 
        Her passion is sales, interior design and working closely with her clients to help achieve their vision. 
        Since co-owning The Key Design, she has successfully directed the sales and operations of the company to expand by 150% in less than one year. </div>
   </div>
   </div>
   </div>
   <div className='about-CLEAR'></div>
</div>
<Footer />
</div>

  );
  }
}

export default What;





