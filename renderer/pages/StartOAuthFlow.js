import { useContext, useEffect, useReducer } from 'react';
import { Flex, Heading, Link, Text, TextField } from 'gestalt';
import { DataContext } from '../context/DataContext';
import DataDisplay from '../components/DataDisplay';
import ScopeCheckboxes from '../components/ScopeCheckboxes';

const reducer = (state, newState) => ({ ...state, ...newState });

export default function StartOAuthFlow() {
  const [data, setData] = useContext(DataContext);
  const [userInput, setUserInput] = useReducer(reducer, {
    appId: data.appId,
    redirectUrl: data.redirectUrl,
  });

  const changeHandler = ({ event, value }) => setUserInput({ [event.target.id]: value });
  const blurHandler = () => setData(userInput);

  useEffect(() => setUserInput(data), [data]);

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
        value={userInput.appId}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <TextField
        label="Redirect URL "
        name="Redirect URL"
        id="redirectUrl"
        value={userInput.redirectUrl}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <ScopeCheckboxes data={data} setData={setData} />
    </Flex>
  );
}
