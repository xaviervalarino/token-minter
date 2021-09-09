import { useContext} from 'react';
import {
  Flex,
  Heading,
  TextField,
} from 'gestalt';
import { DataContext } from '../components/DataContext'
import DataDisplay from '../components/DataDisplay';
import ScopeCheckboxes from '../components/ScopeCheckboxes';

export default function StartOAuthFlow() {
  const [ data, setData ] = useContext(DataContext);

  const updateField = (({ event, value }) => {
    setData({ ...data, [event.target.id]: value })
  })

  return (
    <Flex direction='column' gap={6}>
      <Flex justifyContent='between'>
        <Heading>Start OAuth flow</Heading>
        <DataDisplay data={data}/>
      </Flex>
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
    </Flex>
  );
}
