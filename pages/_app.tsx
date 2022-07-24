import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeConsumer } from "styled-components";

const ThemeCustonContext = React.createContext("light");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
