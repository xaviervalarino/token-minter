import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import store from './dataStore';

const initialValue = {
  appId: '',
  redirectUrl: '',
  scopes: [],
};
const reducer = (data, newData) => ({ ...data, ...newData });

export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useReducer(reducer, initialValue);
  const [fromStore, setFromStore] = useState(false);
  const provider = useMemo(() => {
    return [data, setData];
  }, [data]);

  useEffect(async () => {
    setData((await store.data) || initialValue);
    setFromStore(true);
  }, []);

  useEffect(() => {
    if (fromStore) {
      store.data = data;
    }
  }, [data]);

  return <DataContext.Provider value={provider}>{children}</DataContext.Provider>;
}
