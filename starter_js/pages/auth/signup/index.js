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
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";
import NextLink from "next/link";
import CloseButton from "@chakra-ui/core/dist/CloseButton";
import { withFirebase } from "../firebase";

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";
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
            Sign up
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
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </InputGroup>
            <InputGroup mt={2}>
              <InputLeftAddon w="100px">Confirm</InputLeftAddon>
              <Input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
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
                Sign Up
              </Button>
            </InputGroup>
            <InputGroup mt={2}>
              <Button w="100%" variantColor="twitter">
                Sign up with Google
              </Button>
            </InputGroup>
          </form>
          {error && (
            <Alert status="error" mt={2}>
              <AlertIcon />
              <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
              <AlertDescription mr="50px">{error.message}</AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          )}
          <Text textAlign="center" mt={2}>
            <NextLink href="/auth/login">login</NextLink>
          </Text>
        </Stack>
      </Flex>
    );
  }
}

export default withFirebase(SignUp);
