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
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/core";
import NextLink from "next/link";
import Router from "next/router";
import { withFirebase } from "../firebase";
import { urls } from "../../settings";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        Router.push(urls.home);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py="100px"
        backgroundColor="gray.100"
      >
        <Heading mb={8} as="h1">
          Project Name
        </Heading>
        <Stack width="md" backgroundColor="white" p={8} rounded="lg">
          <Heading as="h4" size="lg">
            Login
          </Heading>
          <form onSubmit={this.onSubmit}>
            <InputGroup mt={4}>
              <InputLeftAddon w="100px">Email</InputLeftAddon>
              <Input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </InputGroup>
            <InputGroup mt={2}>
              <InputLeftAddon w="100px">Password</InputLeftAddon>
              <Input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </InputGroup>
            <InputGroup mt={2}>
              <Button
                disabled={isInvalid}
                backgroundColor="twitter.500"
                color="white"
                mt={4}
                type="submit"
                w="100%"
              >
                Login
              </Button>
            </InputGroup>
          </form>
          <InputGroup mt={2}>
            <Button w="100%" variantColor="twitter">
              Login with Google
            </Button>
          </InputGroup>
          {error && (
            <Alert status="error" mt={2}>
              <AlertIcon />
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}
          <Text textAlign="center" mt={2}>
            <NextLink href={urls.signup}>sign up</NextLink>
          </Text>
        </Stack>
      </Flex>
    );
  }
}

export default withFirebase(LogIn);
