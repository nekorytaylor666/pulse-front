import { graphQLClient } from 'graphql/client';
import { graphql } from 'graphql/gql';
import { useQuery } from 'react-query';
export const GET_PATIENT_BY_ID = graphql(`
  query GetUserById($userId: String!) {
    getUserById(id: $userId) {
      fullName
      id
      email
      createdAt
      phoneNumber
      updatedAt
      appointmentsAsPatient {
        author {
          email
          fullName
          id
          phoneNumber
          uniqueName
        }
        content
        createdAt
        id
        updatedAt
      }
      uniqueName
      address
    }
    bookingsByUser(userId: $userId) {
      id
      uid
      description
      user {
        name
        bio
        email
      }
      title

      startTime
      endTime
    }
  }
`);

export const useGetUserById = (userId: string) => {
  return useQuery(['getUserById', userId], () =>
    graphQLClient.request(GET_PATIENT_BY_ID, { userId })
  );
};
