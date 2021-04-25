import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} 
from "react-router-dom";
import Users from './components/pages/users'
import Accounts from './components/pages/accounts'
const App = () => {
  const url = 'https://miryam-oren-bank-api.herokuapp.com';
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/">
            <Users 
              url = {url}
            />
          </Route>
          <Route path="/accounts">
            <Accounts 
              url = {url}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
