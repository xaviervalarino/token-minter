import { useRoutes } from 'react-router-dom';
import data from './data.json';

import Layout from '../Layout';
import Home from '../../pages/Home';
import StartOAuthFlow from '../../pages/StartOAuthFlow';
import ReceiveAccessCode from '../../pages/ReceiveAccessCode';
import ExchangeForAccessToken from '../../pages/ExchangeForAccessToken';
import ModalHeader from '../ModalHeader';

const views = {
  Layout,
  Home,
  StartOAuthFlow,
  ReceiveAccessCode,
  ExchangeForAccessToken,
  ModalHeader,
};

const createRouteElement = (route) => {
  const Component = views[route.component];
  return {
    ...route,
    element: <Component type={route.type} path={route.path} />,
  };
};
const routes = data.map((route) => {
  const routeWithViews = createRouteElement(route);
  if (Object.hasOwnProperty.call(route, 'children')) {
    routeWithViews.children = routeWithViews.children.map(createRouteElement);
  }
  return routeWithViews;
});

export default function Routes() {
  return useRoutes(routes);
}
