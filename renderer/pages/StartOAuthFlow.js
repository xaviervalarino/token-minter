import { useContext } from 'react';
import { Flex, Heading, Link, Text, TextField } from 'gestalt';
import { DataContext } from '../context/DataContext';
import DataDisplay from '../components/DataDisplay';
import ScopeCheckboxes from '../components/ScopeCheckboxes';

export default function StartOAuthFlow() {
  const [data, setData] = useContext(DataContext);

  const updateField = ({ event, value }) => {
    setData({ [event.target.id]: value });
  };

  return (
    <Flex direction="column" gap={6}>
      <Flex justifyContent="between">
        <Heading>Start OAuth flow</Heading>
        <DataDisplay data={data} />
      </Flex>
      <Text>
        See{' '}
        <Text inline weight="bold">
          <Link
            inline
            href="https://developers-staging.pinterest.com/docs/api/v5/#tag/Authentication"
          >
            Start the OAuth flow
          </Link>
        </Text>{' '}
        in the &lsquo;Getting Started&rsquo; section of the API Docs
      </Text>
      <TextField
        label="App Id"
        name="App Id"
        id="appId"
        value={data.appId || ''}
        onChange={updateField}
      />
      <TextField
        label="Redirect URL "
        name="Redirect URL"
        id="redirectUrl"
        value={data.redirectUrl || ''}
        onChange={updateField}
      />
      <ScopeCheckboxes data={data} setData={setData} />
    </Flex>
  );
}
