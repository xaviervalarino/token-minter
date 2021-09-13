import {
  Box,
  Flex,
  IconButton,
  Heading,
} from 'gestalt';

export default function ModalHeader() {
  const closeModal = () => window.api.closeModal();
  return (
    <Box marginTop={-3} >
      <Flex justifyContent='between'>
        <Heading>Pinterest OAuth endpoint</Heading>
        <IconButton
          accessibilityLabel='Exit modal window'
          bgColor="white"
          icon="cancel"
          iconColor="darkGray"
          size='lg'
          onClick={ closeModal }
          />
      </Flex>
    </Box>
  )
}
