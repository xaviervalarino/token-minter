import { useState, useEffect } from 'react';
import {
  Box,
  TextField
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './App.css';

export default function App() {
  const [ data, updateData ] = useState({})
  useEffect( () => {
    async function setData() {
      const res = await window.api.getStore('data')
      if (res) {
        updateData(res)
      }
    }
    setData()
  }, [])
  useEffect( () => {
    async function setData() {
      window.api.setStore('data', data);
      console.log('set to store')
    }
    setData();
  });

  const updateField = (({ event, value }) => {
    updateData({ ...data, [event.target.id]: value })
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
