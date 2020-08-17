import React from "react";
import {
  Flex,
  Text,
  InputGroup,
  Input,
  Stack,
  InputLeftAddon,
  Heading,
  Button,
} from "@chakra-ui/core";
import NextLink from "next/link";

export default function () {
  return (
    <Flex
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="200px"
    >
      <Heading mb={8} as="h1">
        Project Name
      </Heading>
      <Stack width="md" backgroundColor="gray.100" p={8}>
        <Heading as="h4" size="lg">
          Login
        </Heading>
        <InputGroup mt={4}>
          <InputLeftAddon>Username</InputLeftAddon>
          <Input />
        </InputGroup>
        <InputGroup mt={2}>
          <InputLeftAddon>Password</InputLeftAddon>
          <Input />
        </InputGroup>
        <Button backgroundColor="twitter.500" color="white" mt={4}>
          Login
        </Button>
        <Button variantColor="twitter">Login with Google</Button>
        <Text textAlign="center" mt={2}>
          reset password or <NextLink href="/auth/signup">sign up</NextLink>
        </Text>
      </Stack>
    </Flex>
  );
}
