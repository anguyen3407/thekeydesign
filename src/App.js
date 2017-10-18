import React, { Component } from 'react';
import './App.css';
import router from './router';

class App extends Component {
  // constructor () {
  //   super () 
  
  //       }
      
  //   }
  
  

  render() {

    return (
<div className = "app">

  <div className = "first-box">

    {router}
  </div>

</div>

  );
  }
}

export default App;
