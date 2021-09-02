import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [ data, updateData ] = useState('initial data')
  useEffect( () => {
    async function getData() {
      window.api.setStore('data', { test: 'new data' })
      const res = await window.api.getStore('data.test')
      console.log(res)
      updateData(res)
    }
    getData()
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { data }
        </p>
      </header>
    </div>
  );
}
