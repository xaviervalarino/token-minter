import { useContext } from 'react';
import {
  Button,
  Flex,
  Heading,
  Text
} from 'gestalt';
import { DataContext } from '../components/DataContext';
import DataModal from '../components/DataModal';
import CodeBlock from '../components/CodeBlock';

export default function ReceiveAccessCode() {
  const [ data, setData ] = useContext(DataContext)

  return (
    <Flex direction='column' gap={6}>
      <Flex justifyContent='between'>
        <Heading> Recieve access code</Heading>
        <DataModal data={data}/>
      </Flex>
      <Text>This URL is your request for an access code</Text>
      <CodeBlock rounding={2} color='darkGray'>
            Not enough data, yet...
      </CodeBlock>
      <Flex justifyContent='end'>
        <Button
          text='Request access code'
        />
      </Flex>
    </Flex>
  );
}