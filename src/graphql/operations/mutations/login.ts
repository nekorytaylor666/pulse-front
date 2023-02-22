import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($login: LoginInput!) {
    login(data: $login) {
      accessToken
      refreshToken
      user {
        fullName
        uniqueName
        email
        id
        uniqueName
        phoneNumber
      }
    }
  }
`;
