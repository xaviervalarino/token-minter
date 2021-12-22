import { useEffect, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Flex, Heading } from 'gestalt';
import { DataContext } from '../context/DataContext';
import DataDisplay from '../components/DataDisplay';

export default function ExchangeForAccessToken(props) {
  const [data] = useContext(DataContext);
  const setViewInfo = useOutletContext();

  useEffect(() => setViewInfo(props));

  return (
    <Flex direction="column" gap={6}>
      <Flex justifyContent="between">
        <Heading>Exchange for access token</Heading>
        <DataDisplay data={data} />
      </Flex>
    </Flex>
  );
}
