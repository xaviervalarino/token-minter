import { useContext } from 'react';
import {
  Flex,
  Heading,
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
    </Flex>
  )
}
