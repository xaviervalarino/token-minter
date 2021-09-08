import { useContext} from 'react';
import { DataContext } from '../components/DataContext'
import {
  Box,
  Flex,
  Heading,
  Text,
  TextField,
} from 'gestalt';
import ScopeCheckboxes from '../components/ScopeCheckboxes'

export default function StartOAuthFlow() {
  const [ data, setData ] = useContext(DataContext);

  const updateField = (({ event, value }) => {
    setData({ ...data, [event.target.id]: value })
  })

  return (
    <Flex direction='column' gap={6}>
      <Heading>Start OAuth flow</Heading>
      <TextField
        label='App Id'
        name='App Id'
        id='appId'
        value={ data['appId'] || '' }
        onChange={ updateField }
      />
      <TextField
        label='Redirect URL '
        name='Redirect URL'
        id='redirectUrl'
        value={ data['redirectUrl'] || '' }
        onChange={ updateField }
      />
      <ScopeCheckboxes data={data} setData={setData} />
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
