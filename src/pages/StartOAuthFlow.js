import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  TextField,
} from 'gestalt';
import ScopeCheckboxes from '../components/ScopeCheckboxes'

export default function StartOAuthFlow() {
  const history = useHistory();
  const [ data, setData ] = useState({});

  useEffect(() => {
    async function getStore() {
      const res = await window.api.getStore('data')
      if (res) {
        setData(res);
      }
    }
    getStore();
  }, [])

  useEffect(() => {
    async function setStore() {
      window.api.setStore('data', data);
    }
    setStore();
  });

  const updateField = (({ event, value }) => {
    setData({ ...data, [event.target.id]: value })
  })

  return (
    <Flex direction='column' gap={6}>
      <Heading>Start OAuth flow</Heading>
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
      <ScopeCheckboxes data={data} setData={setData} />
      <Box padding={3} color='darkGray'>
        <Text color='white'>
          <pre>
            { JSON.stringify(data, null, '\r  ') }
          </pre>
        </Text>
      </Box>
      <ButtonGroup>
        <Button
          text='Back'
          onClick={ () => history.push('/')  }
        />
        <Button
          text='Next'
          color='red'
          onClick={ () => history.push('/receive-access-code')  }
        />
      </ButtonGroup>
    </Flex>
  );
}
