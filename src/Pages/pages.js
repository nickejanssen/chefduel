import React from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from '../logo.png';

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/*<p className="App-intro">
      This is the {title} page.
      </p>*/}
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Duel</Link></li>
        <li><Link to="/profile" style={{ textDecoration: 'none', color: '#fff' }} >Profile</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: '#fff' }} >About</Link></li>
        <li><Link to="/settings" style={{ textDecoration: 'none', color: '#fff' }} >Settings</Link></li>
      </ul>
      {/*<h2>{title}</h2>*/}
    </div>
  </div>
);

export default Page