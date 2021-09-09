import { useContext } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text
} from 'gestalt';
import { DataContext } from '../components/DataContext';
import DataDisplay from '../components/DataDisplay';

export default function ExchangeForAccessToken() {
  const [ data ] = useContext(DataContext);

  return (
    <Flex direction='column' gap={6}>
      <Flex justifyContent='between'>
        <Heading>Exchange for access token</Heading>
        <DataDisplay data={data}/>
      </Flex>
      <Box padding={3} color='darkGray'>
        <Text color='white'>
          <pre>
          { JSON.stringify(data, null, '\r  ') }
          </pre>
        </Text>
      </Box>
    </Flex>
  )
}
