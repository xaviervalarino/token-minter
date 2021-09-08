import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Box } from 'gestalt';
import './App.css';
import Home from './pages/Home';
import StartOAuthFlow from './pages/StartOAuthFlow';
import ReceiveAccessCode from './pages/ReceiveAccessCode';
import ExchangeForAccessToken from './pages/ExchangeForAccessToken';

export default function App(props) {
  return (
    <Box padding={10}>
        <HashRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/start-oauth-flow' component={StartOAuthFlow} />
              <Route path='/receive-access-code' component={ReceiveAccessCode} />
              <Route path='/exchange-for-access-token' component={ExchangeForAccessToken} />
          </Switch>
        </HashRouter>
    </Box>
  );
}
