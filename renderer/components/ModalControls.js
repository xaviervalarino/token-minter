import {
  Box,
  Button,
  Flex,
  Heading,
} from 'gestalt';

export default function ModalControls() {
  const closeModal = () => window.api.closeModal();
  return (
    <Box marginTop={-3} >
      <Flex justifyContent='between'>
        <Heading>Pinterest OAuth endpoint</Heading>
        <Button
            text='Close'
            color='red'
            size='lg'
            onClick={ closeModal }
          />
      </Flex>
    </Box>
  )
}
