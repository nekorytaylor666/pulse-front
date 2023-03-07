import { graphql } from 'graphql/gql';
import { graphQLClient } from 'graphql/client';
import { useQuery } from 'react-query';

export const GET_RESEARCH_DOCUMENT_BY_ID = graphql(`
  query GetResearchDocumentById($researchDocumentId: String!) {
    getResearchDocumentById(researchDocumentId: $researchDocumentId) {
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
