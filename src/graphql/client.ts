import { ApolloClient, InMemoryCache } from "@apollo/client";

export const gql_client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
