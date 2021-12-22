import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'gestalt';
import BottomButtonNav from './BottomButtonNav';

export default function Layout() {
  const [viewInfo, setViewInfo] = useState({});

  return (
    <>
      {/* Target area for moving the window around with a mouse */}
      <Box
        height={40}
        dangerouslySetInlineStyle={{
          __style: { WebkitAppRegion: 'drag' },
        }}
      />
      <Box
        position="absolute"
        top
        bottom
        left
        right
        display="flex"
        direction="column"
        overflow="hidden"
      >
        <Box flex="grow" overflow="auto">
          <Box padding={10}>
            <Outlet context={setViewInfo} />
          </Box>
        </Box>
        {viewInfo.type === 'main' && <BottomButtonNav {...viewInfo} />}
      </Box>
    </>
  );
}
