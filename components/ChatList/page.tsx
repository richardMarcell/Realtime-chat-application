"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

export default function ChatList() {
  return (
    <Box height="100vh" width="30%">
      <Flex padding="20px" alignItems="center" justifyContent="space-between">
        <Heading fontSize="20px">Message</Heading>
        <InputGroup width="200px">
          <InputLeftElement pointerEvents="none">🔍</InputLeftElement>
          <Input type="search" placeholder="Search" />
        </InputGroup>
      </Flex>
      <Divider />

      

    </Box>
  );
}
