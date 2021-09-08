import { useHistory } from 'react-router-dom';
import { Box } from 'gestalt';
import BottomButtonNav from './BottomButtonNav';

export default function PageLayout({ page: Page, routes }) {
  const history = useHistory();
  console.log( Page, routes)
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
          <Page />
        </Box>
      </Box>
      <BottomButtonNav
        routes={routes}
        pathname={history.location.pathname}
        onClickHandler={history.push}
      />
    </Box>
  )
}
