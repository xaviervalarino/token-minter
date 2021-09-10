import { useContext } from 'react';
import {
  Flex,
  Heading,
  Link,
  Text
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { DataContext } from '../components/DataContext';
import  DataModal  from '../components/DataModal';


export default function Home(props) {
  const [ data ] = useContext(DataContext)

  return (
    <Flex direction='column' gap={6}>
      <Flex justifyContent='between'>
        <Heading>OAuth token minter</Heading>
        <DataModal data={data}/>
      </Flex>
      <Heading size='sm'>Instructions</Heading>
      <Text>Review{' '}
        <Text inline weight='bold'>
        <Link inline href='https://developers-staging.pinterest.com/docs/api/v5/#tag/App-setup-steps'>
          App setup steps
        </Link>
        </Text>
        {' '}in the 'Getting started' section of the Docs to see prerequisites
      </Text>
      <ul>
        <li>
          <Text>Make sure you app is set to <code>active</code></Text>
        </li>
        <li>
          <Text>Set your 'Redirect URL' to <code>http://localhost/</code></Text>
        </li>
      </ul>
    </Flex>
  );
}
