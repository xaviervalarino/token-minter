import { useContext } from 'react';
import { DataContext } from '../components/DataContext';
import {
  Box,
  Flex,
  Heading,
  Text
} from 'gestalt';
import 'gestalt/dist/gestalt.css';


export default function Home(props) {
  const [ data ] = useContext(DataContext)

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
