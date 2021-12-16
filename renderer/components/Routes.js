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
    path: '/',
    component: Home,
  },
  {
    path: '/start-oauth-flow',
    component: StartOAuthFlow,
  },
  {
    path: '/receive-access-code',
    component: ReceiveAccessCode,
  },
  {
    path: '/exchange-for-access-token',
    component: ExchangeForAccessToken,
  },
  {
    path: '/modal-controls',
    component: ModalHeader,
  },
];

export default function Routes(props) {
  return routes.map(({ path, component }, i) => {
    const exact = !i;
    return (
      <Route
        key={i}
        exact={exact}
        path={path}
        render={(props) => <PageLayout page={component} routes={routes} />}
      />
    );
  });
}
