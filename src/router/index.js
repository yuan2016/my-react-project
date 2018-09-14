
import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom';

import Page1 from '../components/page1/page1'
import Page2 from '../components/page2/page2'

export default class Hello extends React.Component{
  render(){
      return (
        <Switch>
          <Route exact path="/app/page1" component={Page1} />
          <Route exact path="/app/page2" component={Page2} />
        </Switch>
      )
  }
}
