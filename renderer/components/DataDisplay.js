import { useState } from 'react';
import {
  Box,
  Button,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  IconButton,
  Layer,
  Sheet,
  Tooltip
} from "gestalt";
import CodeBlock from './CodeBlock';

export default function DataDisplay({ data }) {
  const [ showSheet, setShowSheet ] = useState(false);

  const DataDisplaySheet = ({ onDismiss }) => {
    return (
      <Sheet
        accessibilityDismissButtonLabel=''
        accessibilitySheetLabel='Current app data'
        size='sm'
        onDismiss={ onDismiss }
        heading='Current app data'
        footer={ ({onDismissStart}) => (
          <Flex justifyContent='end' gap={0}>
            <Button
              color='red'
              size='lg'
              text='Got it'
              onClick={ onDismissStart }/>
          </Flex>
        )}
      >
        <Box marginStart={-8} marginEnd={-8}>
          <CodeBlock>
            { JSON.stringify(data, null, '\r  ') }
          </CodeBlock>
        </Box>
      </Sheet>
    );
  }

  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <>
      <Tooltip text='See data'>
        <IconButton
          accessibilityLabel='Display app data'
          bgColor='darkGray'
          icon='cog'
          size='sm'
          onClick={() =>  setShowSheet(true) }
        />
      </Tooltip>
      { showSheet && (
        <Layer zIndex={zIndex}>
          <DataDisplaySheet
            data={data}
            onDismiss={() => setShowSheet(false) }
          />
        </Layer>
      )}
    </>
  );
}
