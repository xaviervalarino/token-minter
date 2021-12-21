import { Route } from 'react-router-dom';
import Layout from './Layout';

// Pages
import Home from '../pages/Home';
import StartOAuthFlow from '../pages/StartOAuthFlow';
import ReceiveAccessCode from '../pages/ReceiveAccessCode';
import ExchangeForAccessToken from '../pages/ExchangeForAccessToken';
import ModalHeader from './ModalHeader';

const routes = [
  {
    id: 'home',
    path: '/',
    component: Home,
    type: 'main',
  },
  {
    id: 'start-oauth',
    path: '/start-oauth-flow',
    component: StartOAuthFlow,
    type: 'main',
  },
  {
    id: 'recieve-code',
    path: '/receive-access-code',
    component: ReceiveAccessCode,
    type: 'main',
  },
  {
    id: 'exchange-token',
    path: '/exchange-for-access-token',
    component: ExchangeForAccessToken,
    type: 'main',
  },
  {
    id: 'modal-controls',
    path: '/modal-controls',
    component: ModalHeader,
    type: 'modal',
  },
];

export default function Routes() {
  return routes.map(({ id, path, component, type }, i) => {
    const exact = !i;
    return (
      <Route
        key={id}
        exact={exact}
        path={path}
        render={() => <Layout type={type} page={component} routes={routes} />}
      />
    );
  });
}
