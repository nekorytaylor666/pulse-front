import request from 'graphql-request';
import { graphQLClient } from 'graphql/client';
import { graphql } from 'graphql/gql';
import { ConsulationListCreateInput } from 'graphql/graphql';
import { useMutation, useQuery } from 'react-query';

export const CREATE_CONSULTATION_LIST = graphql(
  `
    mutation CreataeConsultationList(
      $createConsultationListCreate: ConsulationListCreateInput!
    ) {
      createConsultationList(create: $createConsultationListCreate) {
        authorId
        content
        id
        patientId
      }
    }
  `
);

export const EDIT_CONSULTATION_LIST = graphql(
  `
    mutation EditConsultationList(
      $consultationListId: String!
      $edit: ConsulationListCreateInput!
    ) {
      editConsultationList(
        consultationListId: $consultationListId
        edit: $edit
      ) {
        authorId
        content
        id
        patientId
      }
    }
  `
);
