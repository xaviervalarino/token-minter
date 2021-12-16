import { Route } from 'react-router-dom';
import PageLayout from './PageLayout';

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
  },
  {
    id: 'start-oauth',
    path: '/start-oauth-flow',
    component: StartOAuthFlow,
  },
  {
    id: 'recieve-code',
    path: '/receive-access-code',
    component: ReceiveAccessCode,
  },
  {
    id: 'exchange-token',
    path: '/exchange-for-access-token',
    component: ExchangeForAccessToken,
  },
  {
    id: 'modal-controls',
    path: '/modal-controls',
    component: ModalHeader,
  },
];

export default function Routes() {
  return routes.map(({ id, path, component }, i) => {
    const exact = !i;
    return (
      <Route
        key={id}
        exact={exact}
        path={path}
        render={() => <PageLayout page={component} routes={routes} />}
      />
    );
  });
}
