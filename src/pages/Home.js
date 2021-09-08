import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text
} from 'gestalt';
import 'gestalt/dist/gestalt.css';


export default function Home() {
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

  // const updateField = (({ event, value }) => {
  //   setData({ ...data, [event.target.id]: value })
  // })

  return (
    <Flex direction='column' gap={6}>
     <Heading>Home</Heading>
      <Text>Instructions</Text>
      <Box padding={3} color='darkGray'>
        <Text color='white'>
          <pre>
          { JSON.stringify(data, null, '\r  ') }
          </pre>
        </Text>
      </Box>
    </Flex>
  );
}
