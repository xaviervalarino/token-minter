import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text
} from 'gestalt';

export default function ExchangeForAccessToken() {
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

  return (
    <Flex direction='column' gap={6}>
      <Heading>Exchange for access token</Heading>
      <Box padding={3} color='darkGray'>
        <Text color='white'>
          <pre>
          { JSON.stringify(data, null, '\r  ') }
          </pre>
        </Text>
      </Box>
        <Button
          text='Back'
          onClick={ () => history.push('/receive-access-code') }
        />
    </Flex>
  )
}
