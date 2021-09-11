import { useContext, useEffect } from 'react';
import {
  Button,
  Flex,
  Heading,
  Text
} from 'gestalt';
import { DataContext } from '../components/DataContext';
import DataModal from '../components/DataModal';
import CodeBlock from '../components/CodeBlock';

const createUrl = ({ appId, redirectUrl, scopes, optionalState }) => {
  const url = new URL('https://www.pinterest.com/oauth/');
  if (appId) url.searchParams.append('client_id', appId);
  if (redirectUrl) url.searchParams.append('redirect_uri', redirectUrl);
  url.searchParams.append('response_type', 'code');
  if (scopes) url.searchParams.append('scope', scopes);
  if (optionalState) url.searchParams.append('state', optionalState);
  return url.href;
}

export default function ReceiveAccessCode() {
  const [ data, setData ] = useContext(DataContext)
  const updateUrl = () => {
    if (data) {
      const href = createUrl(data)
      if (!data.reqUrl || href !== data.reqUrl) {
        setData({ ...data, reqUrl: href });
      }
    }
  }
  const openModal = async () => {
    const parsed = await window.api.openModal(data.reqUrl)
    setData({ ...data, accessCode: parsed });
  };

  useEffect( () => updateUrl())

  return (
    <Flex direction='column' gap={6}>
      <Flex justifyContent='between'>
        <Heading> Receive access code</Heading>
        <DataModal data={data}/>
      </Flex>
      <Flex direction='column' gap={2}>
      <Text>This URL is your request for an access code</Text>
      <CodeBlock dark rounding={2} color='darkGray'>
        { decodeURIComponent(data.reqUrl) }
      </CodeBlock>
      </Flex>
      <Flex justifyContent='end'>
        <Button
          text='Request access code'
          iconEnd="arrow-up-right"
          onClick={ openModal }
        />
      </Flex>
      { data.accessCode &&
        <Flex direction='column' gap={2}>
          <Text>This is your access code</Text>
          <CodeBlock dark rounding={2} color='darkGray'>
            code: { data.accessCode }
          </CodeBlock>
        </Flex>
      }
    </Flex>
  );
}
