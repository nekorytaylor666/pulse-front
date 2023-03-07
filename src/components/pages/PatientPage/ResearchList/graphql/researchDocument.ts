import request from 'graphql-request';
import { graphQLClient } from 'graphql/client';
import { graphql } from 'graphql/gql';
import { ConsulationListCreateInput } from 'graphql/graphql';
import { useMutation, useQuery } from 'react-query';

export const CREATE_RESEARCH_DOCUMENT = graphql(
  `
    mutation CreateResearchDocument($create: ResearchDocumentCreateInput!) {
      createResearchDocument(create: $create) {
        authorId
        content
        id
        patientId
      }
    }
  `
);

export const EDIT_RESEARCH_DOCUMENT = graphql(
  `
    mutation EditResearchDocument(
      $edit: ResearchDocumentCreateInput!
      $researchDocumentId: String!
    ) {
      editResearchDocument(
        edit: $edit
        researchDocumentId: $researchDocumentId
      ) {
        authorId
        content
        id
        patientId
      }
    }
  `
);
