import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function getStore() {
      const res = await window.api.getStore('data');
      if (res) {
        setData(res);
      }
    }
    getStore();
  }, []);

  useEffect(() => {
    async function setStore() {
      window.api.setStore('data', data);
    }
    setStore();
  });

  return <DataContext.Provider value={[data, setData]}>{children}</DataContext.Provider>;
}
