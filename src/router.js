import React from "react";
import { Switch, Route} from "react-router-dom";

import What from './components/What/What';
import Home from './components/Home/Home';
import Prices from './components/Prices/Prices';
import Contacts from './components/Contacts/Contacts';
import Harvest from './components/Images/harvest';
import Anderson from './components/Images/anderson';
import Ann from './components/Images/ann';
import Cindy from './components/Images/cindy-4300';
import Crowley from './components/Images/crowley';
import Enoch from './components/Images/enoch';
import Hatfield from './components/Images/hatfield';
import Jackson from './components/Images/jackson';
import Miller from './components/Images/miller';
import Nicholaus from './components/Images/nicholaus';
import Sacs from './components/Images/sacs';
import Westgate from './components/Images/westgate';
import Kitchen from './components/Choose Category/kitchen';
import Bedroom from './components/Choose Category/Bedroom';
import Bathroom from './components/Choose Category/bathroom';
import LivingRoom from './components/Choose Category/livingRoom';


export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path="/whatWeAre" component={ What } /> 
    <Route path="/contacts" component={ Contacts } />
    <Route path="/prices" component={ Prices } />
    <Route path='/harvest' component={ Harvest }/>
    <Route path="/anderson" component={ Anderson } />
    <Route path="/ann" component={ Ann } />
    <Route path="/cindy" component={ Cindy } />
    <Route path="/crowley" component={ Crowley } />
    <Route path="/enoch" component={ Enoch } />
    <Route path="/hatfield" component={ Hatfield } />
    <Route path="/jackson" component={ Jackson } />
    <Route path="/miller" component={ Miller } />
    <Route path="/nicholaus" component={ Nicholaus } />
    <Route path="/sacs" component={ Sacs } />
    <Route path="/westgate" component={ Westgate } />
    <Route path="/kitchen" component={Kitchen}/>
    <Route path="/bedroom" component={Bedroom}/>
    <Route path="/bathroom" component={Bathroom}/>
    <Route path="/living-family-room" component={LivingRoom}/>
  </Switch>
)