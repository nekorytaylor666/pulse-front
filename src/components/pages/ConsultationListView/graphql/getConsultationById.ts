import { graphql } from 'graphql/gql';
import { graphQLClient } from 'graphql/client';
import { useQuery } from 'react-query';

export const GET_CONSULTATION_LIST_BY_ID = graphql(`
  query GetConsultationListById($consultationListId: String!) {
    getConsultationListById(consultationListId: $consultationListId) {
      id
      content
      patient {
        id
        fullName
        email
        phoneNumber
        address
      }
      author {
        fullName
        phoneNumber
        email
        address
        id
      }
      createdAt
      updatedAt
    }
  }
`);
