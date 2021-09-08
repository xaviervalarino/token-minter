import { useContext } from 'react';
import { DataContext } from '../components/DataContext';
import {
  Box,
  Flex,
  Heading,
  Text
} from 'gestalt';

export default function ReceiveAccessCode() {
  const [ data, setData ] = useContext(DataContext)

  return (
    <Flex direction='column' gap={6}>
      <Heading> Recieve access code</Heading>
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
