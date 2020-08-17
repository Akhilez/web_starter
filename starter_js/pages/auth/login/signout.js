import { withFirebase } from "../firebase";
import { Box } from "@chakra-ui/core";
import React from "react";
import Router from "next/router";
import { urls } from "../../settings";

const SignOutButtonBase = ({ firebase, children, ...props }) => (
  <Box
    {...props}
    as="button"
    onClick={() => firebase.doSignOut().then(() => Router.push(urls.login))}
  >
    {children}
  </Box>
);

export const SignOutButton = withFirebase(SignOutButtonBase);
