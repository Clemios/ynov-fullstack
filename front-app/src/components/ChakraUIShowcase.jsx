import React from 'react';
import {
  Box,
  Button,
  Container,
  Input,
  Separator,
} from '@chakra-ui/react';

export default function BasicChakraShowcase() {
  return (
    <>
    <Separator orientation="horizontal" />
    <h1>CHAKRA SHOWCASE:</h1>
    <Container maxW="lg" py={10}>
      <Box borderWidth="1px" borderRadius="md" p={4} mb={6}>
        <Box mb={4}>
          <Input placeholder="Enter something..." />
        </Box>
        <Button color={{ sm: 'red.base', md: "red.light", lg: "red.dark" }} colorScheme="red">Click Me</Button>
      </Box>

      <Box mb={6} fontSize={{ sm: "16px", md: "18px", lg: "20px" }}>
        Font size responsive
      </Box>

    </Container>
    </>
  );
}
