import { useContext } from 'react';
import { Flex, Heading, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { DataContext } from '../components/DataContext';
import DataDisplay from '../components/DataDisplay';

export default function Home() {
  const [data] = useContext(DataContext);

  return (
    <Flex direction="column" gap={6}>
      <Flex justifyContent="between">
        <Heading>OAuth token minter</Heading>
        <DataDisplay data={data} />
      </Flex>
      <Heading size="sm">Instructions</Heading>
      <Text>
        Review{' '}
        <Text inline weight="bold">
          <Link
            inline
            href="https://developers-staging.pinterest.com/docs/api/v5/#tag/App-setup-steps"
          >
            App setup steps
          </Link>
        </Text>{' '}
        in the &lsquo;Getting started&rsquo; section of the Docs to see prerequisites
      </Text>
      <ul>
        <li>
          <Text>
            Make sure you app is set to <code>active</code>
          </Text>
        </li>
        <li>
          <Text>
            Set your &lsquo;Redirect URL&rsquo; to <code>http://localhost/</code>
          </Text>
        </li>
      </ul>
    </Flex>
  );
}
