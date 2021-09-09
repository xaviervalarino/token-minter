import { Box } from 'gestalt';
import BottomButtonNav from './BottomButtonNav';
import { DataProvider } from './DataContext'

export default function PageLayout({ page: Page, routes }) {
  return (
    <Box
      position='absolute'
      top bottom left right
      display='flex'
      direction='column'
      overflow='hidden'
    >
      <Box flex='grow' overflow='auto'>
        <Box padding={10}>
          <DataProvider>
            <Page />
          </DataProvider>
        </Box>
      </Box>
      <BottomButtonNav routes={routes} />
    </Box>
  )
}
