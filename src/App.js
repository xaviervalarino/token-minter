import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [ data, updateData ] = useState('nothing yet...')
  useEffect( () => {
    async function getData() {
      const res = await window.api.doAction('data from React App.js')
      updateData(res)
      console.log(data)
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
