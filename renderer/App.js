import { HashRouter, Switch } from 'react-router-dom';
import Routes from './components/Routes'
import './App.css';

export default function App(props) {
  return (
      <HashRouter>
        <Switch>
          <Routes />
        </Switch>
      </HashRouter>
  );
}
