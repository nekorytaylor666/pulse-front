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
import { QueryClient, QueryClientProvider } from 'react-query';
import '@algolia/autocomplete-theme-classic';
import { appWithTranslation } from 'next-i18next';

import Fonts from 'Fonts';
import { queryClient } from 'lib/queryclient';
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Pulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7421FC" />
      </Head>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <Fonts></Fonts>
            <Component {...pageProps} />
          </React.StrictMode>
        </QueryClientProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
