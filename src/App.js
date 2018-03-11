import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
import Page from './Pages/pages.js';
import Duel from './Components/duel/duel.js';
import Profile from './Components/profile/profile.js';
import About from './Components/about/about.js';
import Settings from './Components/settings/settings.js';


class App extends Component {
render() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Duel} />
      <Route path="/profile" component={Profile}/>
      <Route path="/about" component={About}/>
      <Route path="/settings" component={Settings}/>
    </Router>
  );
}
}

export default App;
