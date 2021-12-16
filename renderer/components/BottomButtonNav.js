import { useHistory } from 'react-router-dom';
import { Box, Button, Flex } from 'gestalt';

export default function ButtonNav({ routes }) {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const buttons = [];
  routes.forEach(({ id, path }, i) => {
    if (path === currentPath && i > 0) {
      buttons.push(
        <Flex key={`${id}_back`}>
          <Button text="Back" size="lg" onClick={() => history.push(routes[i - 1].path)} />
        </Flex>,
      );
    }
    if (path === currentPath && i < routes.length - 1) {
      buttons.push(
        <Flex key={`${id}_next`} flex="grow" justifyContent="end">
          <Button
            color="red"
            text="Next"
            size="lg"
            onClick={() => history.push(routes[i + 1].path)}
          />
        </Flex>,
      );
    }
  });

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
