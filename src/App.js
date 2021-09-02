import { useState, useEffect } from 'react';
import {
  Box,
  TextField
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './App.css';
import ScopeCheckboxes from './components/ScopeCheckboxes'

export default function App() {
  const [ data, setData ] = useState({})

  useEffect( () => {
    async function getStore() {
      const res = await window.api.getStore('data')
      if (res) {
        setData(res)
      }
    }
    getStore()
  }, [])

  useEffect( () => {
    async function setStore() {
      window.api.setStore('data', data);
    }
    setStore();
  });

  const updateField = (({ event, value }) => {
    setData({ ...data, [event.target.id]: value })
  })

  return (
    <div className="App">
      <TextField
        label='App Id'
        name='App Id'
        id='appId'
        value={ data['appId'] || '' }
        onChange={ updateField }
      />
      <TextField
        label='Redirect URL '
        name='Redirect URL'
        id='redirectUrl'
        value={ data['redirectUrl'] || '' }
        onChange={ updateField }
      />
      <Box>
        { JSON.stringify(data) }
      </Box>
    </div>
  );
}
