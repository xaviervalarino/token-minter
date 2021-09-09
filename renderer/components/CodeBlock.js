import { Box, Text } from 'gestalt';

export default function CodeBlock({ dark, rounding, children }) {
  const bkg = dark ? 'darkGray' : 'lightGray';
  const fg =  dark ? 'white' : 'darkGray';
  const style =  {
    fontFamily: 'SF Mono',
    lineHeight: 1.4,
    color: {fg},
    margin: 0
  };
  return (
    <Box padding={6} color={bkg} rounding={rounding}>
      <pre style={style}>
        { children }
      </pre>
    </Box>
  )
}
