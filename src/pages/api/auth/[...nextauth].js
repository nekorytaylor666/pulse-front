import { ApolloError } from '@apollo/client';
import { CopyIcon } from '@chakra-ui/icons';
import { client, gql_client } from 'graphql/client';
import { LOGIN_MUTATION } from 'graphql/operations/mutations/login';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const util = require('util');

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        uniqueName: {
          label: 'uniqueName',
          type: 'text',
          placeholder: 'jsmith',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data, errors } = await gql_client.mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              login: {
                uniqueName: credentials.uniqueName,
                password: credentials.password,
              },
            },
          });

          if (errors) {
            return null;
          }
          const res = await data.login;
          console.log(data);
          const user = await res.user;
          const token = {
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          };
          const payload = { user, token };

          return payload;
          //@ts-ignore
        } catch (error) {
          console.log(JSON.stringify(error, null, 4));
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(user, token);
      if (user) {
        token = { ...user.token, user };
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;
      // session.user = token.user;

      // return session;
      console.log(session, token, user);
      session.user = {
        ...session.user,
        ...token.user,
      };
      session.accessToken = token.accessToken;

      return session;
    },
  },
});
