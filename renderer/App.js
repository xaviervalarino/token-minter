import { HashRouter, Switch } from 'react-router-dom';
import Routes from './components/Routes'

export default function App(props) {
  return (
      <HashRouter>
        <Switch>
          <Routes />
        </Switch>
      </HashRouter>
  );
}
