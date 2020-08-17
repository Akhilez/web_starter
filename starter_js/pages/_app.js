import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme/theme";
import CSSReset from "@chakra-ui/core/dist/CSSReset";
import "./auth/firebase";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
