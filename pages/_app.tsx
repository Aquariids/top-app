import Head from "next/head";
import { AppProps } from "../node_modules/next/dist/shared/lib/router/router";
import React from "react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title> hello </title>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
