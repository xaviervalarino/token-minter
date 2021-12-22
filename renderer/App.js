import { HashRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Routes from './components/Routes';

export default function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </DataProvider>
  );
}
