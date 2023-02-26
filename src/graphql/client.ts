import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLClient } from 'graphql-request';

export const gql_client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_API_URL ?? 'http://localhost:3001/graphql';
export const graphQLClient = new GraphQLClient(endpoint);
