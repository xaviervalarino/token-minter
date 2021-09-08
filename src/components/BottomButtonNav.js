import {
  Box,
  Button,
  Flex
} from 'gestalt';

export default function ButtonNav ({ routes, pathname, onClickHandler }) {
  const buttons = [];
  routes.forEach( ({path}, i) => {
    if ( path === pathname && i > 0 ) {
      buttons.push(
        <Flex key={i-1}>
          <Button
            text='Back'
            onClick={ () => onClickHandler(routes[i-1].path) }
          />
        </Flex>
      )
    }
    if ( path === pathname && i < routes.length - 1 ) {
      buttons.push(
        <Flex key={i+1} flex='grow' justifyContent='end'>
        <Button
          color='red'
          text='Next'
          onClick={ () => onClickHandler(routes[i+1].path) }
        />
        </Flex>
      )
    }
  })

  return (
    <Box
      color='white'
      display='flex'
      justifyContent='between'
      borderStyle='shadow'
      marginEnd={-1}
      marginBottom={-1}
      padding={9}
    >
      { buttons }
    </Box>
  );
}
