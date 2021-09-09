import { useContext } from 'react';
import {
  Flex,
  Heading,
  Text
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { DataContext } from '../components/DataContext';
import  DataDisplay  from '../components/DataDisplay';


export default function Home(props) {
  const [ data ] = useContext(DataContext)

  return (
    <Flex direction='column' gap={6}>
      <Flex justifyContent='between'>
        <Heading>Home</Heading>
        <DataDisplay data={data}/>
      </Flex>
      <Text>Instructions</Text>
    </Flex>
  );
}
