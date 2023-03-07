import { graphQLClient } from 'graphql/client';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { graphql } from 'graphql/gql';
import Editor from 'components/editor';
import { GET_RESEARCH_DOCUMENT_BY_ID } from './graphql/getResearchById';

const ResearchDocumentView = () => {
  const router = useRouter();
  const { id } = router.query;
  const consultationId = id as string;
  console.log(router.query);
  const { data, isLoading, isError, error } = useQuery(
    ['getConsultationListById', consultationId],
    () => {
      return graphQLClient.request(GET_RESEARCH_DOCUMENT_BY_ID, {
        researchDocumentId: consultationId,
      });
    },
    { enabled: !!consultationId }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {JSON.stringify(error, null, 2)}</div>;
  }

  return (
    <div>
      <Editor
        onChange={() => console.log()}
        initialData={data?.getResearchDocumentById?.content}
      ></Editor>
    </div>
  );
};

export default ResearchDocumentView;
