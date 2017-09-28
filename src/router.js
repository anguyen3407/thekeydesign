import React from "react";
import { Switch, Route} from "react-router-dom";

import What from './components/What/What';
import Home from './components/Home/Home';
import Prices from './components/Prices/Prices';
import Contacts from './components/Contacts/Contacts';


export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path="/whatWeAre" component={ What } /> 
    <Route path="/contacts" component={ Contacts } />
    <Route path="/prices" component={ Prices } />
  </Switch>
)