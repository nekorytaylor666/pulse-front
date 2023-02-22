import { gql } from '@apollo/client';

export const GET_DOCTORS = gql`
  query {
    getDoctors {
      id
      user {
        fullName
        email
        uniqueName
        phoneNumber
      }
    }
  }
`;
