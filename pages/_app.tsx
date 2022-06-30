import { Head } from 'next/document';
import { AppProps } from '../node_modules/next/dist/shared/lib/router/router';
import React from 'react';
import '../styles/globals.css';


function MyApp({ Component, pageProps }:AppProps):JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
