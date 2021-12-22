import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex } from 'gestalt';
import routes from './Routes/data.json';

const mainRoutes = routes
  .map(({ children }) => children.filter(({ type }) => type === 'main'))
  .flatMap((route) => route);
//   .filter((route) => {
//     console.log('filter', route) ;
//     return route;
// })

export default function ButtonNav({ path }) {
  const buttons = [];
  const navigate = useNavigate();
  const index = mainRoutes.findIndex(({ path: routePath }) => routePath === path);
  if (index > 0) {
    buttons.push(
      <Flex key={`${mainRoutes[index].id}_back`}>
        <Button text="Back" size="lg" onClick={() => navigate(mainRoutes[index - 1].path)} />
      </Flex>
    );
  }
  if (index < mainRoutes.length - 1) {
    buttons.push(
      <Flex key={`${mainRoutes[index].id}_next`} flex="grow" justifyContent="end">
        <Button
          color="red"
          text="Next"
          size="lg"
          onClick={() => navigate(mainRoutes[index + 1].path)}
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
