import { useState } from 'react';
import {
  Box,
  Button,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  IconButton,
  Layer,
  Modal,
  Text
} from "gestalt";
import CodeBlock from './CodeBlock';

export default function DataDisplay({ data }) {
  const [ showModal, setShowModal ] = useState(false);

  const DataDisplayModal = ({ onDismiss }) => {
    return (
        <Modal
          accessibilityModalLabel='Current app data'
          heading='Current app data'
          size='sm'
          onDismiss={ onDismiss }
          footer={
            <Flex justifyContent='end' gap={2}>
              <Button color='red' text='Got it' />
            </Flex>
          }
        >
          <CodeBlock>
            { JSON.stringify(data, null, '\r  ') }
          </CodeBlock>
        </Modal>
    )
  }

  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <>
      <IconButton
        accessibilityLabel='Display App data'
        bgColor='darkGray'
        icon='cog'
        size='sm'
        onClick={() =>  setShowModal(true) }
      />
      { showModal && (
        <Layer zIndex={zIndex}>
          <DataDisplayModal
            data={data}
            onDismiss={() => setShowModal(false) }
          />
        </Layer>
      )}
    </>
  );
}
