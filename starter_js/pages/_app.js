import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme/theme";
import CSSReset from "@chakra-ui/core/dist/CSSReset";
import "./auth/firebase";
import { Firebase, FirebaseContext, WithAuthProvider } from "./auth/firebase";

export default function ({ Component, ...props }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <FirebaseContext.Provider value={new Firebase()}>
        <FirebaseContext.Consumer>
          {(firebase) => (
            <WithAuthProvider firebase={firebase}>
              <Component {...props} />
            </WithAuthProvider>
          )}
        </FirebaseContext.Consumer>
      </FirebaseContext.Provider>
    </ThemeProvider>
  );
}

const hierarchy = {
  _app: {
    ThemeProvider: {
      FirebaseProvider: {
        MyAppWithFirebase: {
          FirebaseConsumer: {
            AuthProvider: {
              Component: "Component",
            },
          },
        },
      },
    },
  },
};
