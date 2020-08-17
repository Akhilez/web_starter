import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme/theme";
import CSSReset from "@chakra-ui/core/dist/CSSReset";
import "./auth/firebase";
import { Firebase, FirebaseContext } from "./auth/firebase";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <FirebaseContext.Provider value={new Firebase()}>
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
