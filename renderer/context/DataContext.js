import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import { getStore, setStore } from './dataStore';

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

  useEffect(() => {
    getStore(setData, initialValue);
    setFromStore(true);
  }, []);

  useEffect(() => {
    if (fromStore) {
      setStore(data);
    }
  }, [data]);

  return <DataContext.Provider value={provider}>{children}</DataContext.Provider>;
}
