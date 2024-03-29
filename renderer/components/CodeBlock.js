import { Box, Text } from 'gestalt';

export default function CodeBlock({ dark, rounding, children }) {
  const bkg = dark ? 'darkGray' : 'lightGray';
  const fg = dark ? 'white' : 'darkGray';
  const style = {
    fontFamily:
      'SFMono-Medium,SF Mono,Segoe UI Mono,Roboto Mono,Ubuntu Mono,Menlo,Consolas,Courier,monospace',
    lineHeight: 1.4,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    margin: 0,
  };
  return (
    <Box overflow="hidden" padding={6} color={bkg} rounding={rounding}>
      <Text color={fg}>
        <code style={style}>{children}</code>
      </Text>
    </Box>
  );
}
