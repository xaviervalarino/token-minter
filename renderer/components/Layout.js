import { Box } from 'gestalt';
import BottomButtonNav from './BottomButtonNav';

export default function Layout({ page: Page, type, routes }) {
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
            <Page />
          </Box>
        </Box>
        {type === 'main' && <BottomButtonNav routes={routes} />}
      </Box>
    </>
  );
}
