import React, { createContext } from 'react';
import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import PageLayout from './components/PageLayout';

// Pages
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
  const builtRoutes = routes.map( ({ path, component }, i) => {
    const exact = !i ? true: false;
    return <Route
      key={i}
      exact={exact}
      path={path}
      render={ (props) => <PageLayout page={component} routes={routes}/> }
    />
  });
  return (
    <HashRouter>
      <Switch>
        { builtRoutes }
      </Switch>
    </HashRouter>
  );
}
