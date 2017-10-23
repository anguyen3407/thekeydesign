import React, { Component } from 'react';
import './HomeMobile.css';
import NavMobile from '../NavMobile/NavMobile';


class HomeMobile extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (

<div className='Home-Mobile'>
<NavMobile/>
<div className='HOME'>
<img src='https://i.imgur.com/0SI855p.jpg' width='100%' height='100%'/>
</div>
    </div>
  );
  }
}

export default HomeMobile;