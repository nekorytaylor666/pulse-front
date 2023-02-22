import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';
import theme from 'theme/theme';

import 'styles/App.css';
import 'styles/Contact.css';
import 'styles/Plugins.css';
import 'styles/MiniCalendar.css';

import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { gql_client } from 'graphql/client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

// import Fonts from 'Fonts';
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Horizon UI PRO NextJS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <SessionProvider session={session}>
        <ApolloProvider client={gql_client}>
          <React.StrictMode>
            <Component {...pageProps} />
          </React.StrictMode>
        </ApolloProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
