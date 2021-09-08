import React, { createContext } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Box } from 'gestalt';
import './App.css';
import Home from './pages/Home';
import StartOAuthFlow from './pages/StartOAuthFlow';
import ReceiveAccessCode from './pages/ReceiveAccessCode';
import ExchangeForAccessToken from './pages/ExchangeForAccessToken';

export default function App(props) {
  const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path:'/start-oauth-flow',
      component: StartOAuthFlow
    },
    {
      path:'/receive-access-code',
      component: ReceiveAccessCode
    },
    {
      path:'/exchange-for-access-token',
      component: ExchangeForAccessToken
    }
  ];
  const builtRoutes = routes.map( ({ path, component: Component }, i) => {
    const exact = !i ? true: false;
    return <Route
      key={i}
      exact={exact}
      path={path}
      render={ (props) => <Component routes={routes} {...props} /> }
    />
  });
  return (
    <Box padding={10}>
        <HashRouter>
          <Switch>
            { builtRoutes }
          </Switch>
        </HashRouter>
    </Box>
  );
}
