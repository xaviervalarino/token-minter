import { useHistory } from 'react-router-dom';
import { Box, Button, Flex } from 'gestalt';

export default function ButtonNav({ routes }) {
  const history = useHistory();
  const pages = routes.filter(({ type }) => type === 'main');
  const index = pages.findIndex(({ path }) => path === history.location.pathname);
  const buttons = [];
  if (index > 0) {
    buttons.push(
      <Flex key={`${pages[index].id}_back`}>
        <Button text="Back" size="lg" onClick={() => history.push(pages[index - 1].path)} />
      </Flex>
    );
  }
  if (index < pages.length - 1) {
    buttons.push(
      <Flex key={`${pages[index].id}_next`} flex="grow" justifyContent="end">
        <Button
          color="red"
          text="Next"
          size="lg"
          onClick={() => history.push(pages[index + 1].path)}
        />
      </Flex>
    );
  }

  return (
    <Box
      color="white"
      display="flex"
      justifyContent="between"
      borderStyle="shadow"
      marginEnd={-1}
      marginBottom={-1}
      padding={9}
    >
      {buttons}
    </Box>
  );
}
