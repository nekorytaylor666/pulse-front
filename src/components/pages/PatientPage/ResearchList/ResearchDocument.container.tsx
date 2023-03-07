import { useToast } from '@chakra-ui/react';
import { OutputData } from '@editorjs/editorjs';
import { graphQLClient } from 'graphql/client';
import {
  ConsulationListCreateInput,
  CreataeConsultationListMutation,
  CreataeConsultationListMutationVariables,
  EditConsultationListMutation,
  EditConsultationListMutationVariables,
  ResearchDocumentCreateInput,
} from 'graphql/graphql';
import { queryClient } from 'lib/queryclient';
import { useRouter } from 'next/router';
import React from 'react';
import { MutateFunction, useMutation } from 'react-query';
import { useCurrentPatientStore } from 'stores/currentPatient/currentPatient.store';
import { useGetUserById } from '../graphql/getPatientById';
import ResearchDocumentsComponent from './ResearchDocumentList.component';
import {
  CREATE_RESEARCH_DOCUMENT,
  EDIT_RESEARCH_DOCUMENT,
} from './graphql/researchDocument';
import { useSession } from 'next-auth/react';

export type ResearchDocuments = ReturnType<
  typeof useGetUserById
>['data']['getUserById']['researchDocumentsAsPatient'];

interface Props {
  researchDocuments: ResearchDocuments;
}

const ResearchDocumentContainer: React.FC<Props> = (props) => {
  const { researchDocuments } = props;
  const patientId = useRouter().query.id as string;
  const toast = useToast();
  const session = useSession();
  const doctor = session.data?.user;
  const doctorId = doctor?.id;
  const { mutate: createResearchDocument } = useMutation(
    ['createResearchDocument'],
    (data: ResearchDocumentCreateInput) => {
      return graphQLClient.request(CREATE_RESEARCH_DOCUMENT, {
        create: { ...data },
      });
    },
    {
      onSuccess(data) {
        queryClient.invalidateQueries('getUserById');
        if (data.createResearchDocument) {
          toast({
            title: 'Список консультаций создан',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        }
      },
      onError(error) {
        toast({
          title: 'Ошибка при создании списка консультаций',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      },
    }
  );
  const { mutate: editConsultationList } = useMutation(
    ['editConsultationList'],
    (data: EditConsultationListMutationVariables) =>
      graphQLClient.request(EDIT_RESEARCH_DOCUMENT, {
        researchDocumentId: data.consultationListId,
        edit: data.edit,
      }),
    {
      onSuccess(data) {
        queryClient.invalidateQueries('getUserById');
        toast({
          title: 'Список консультаций изменен',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      },
      onError(error) {
        toast({
          title: 'Ошибка при изменений списка консультаций',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      },
    }
  );

  const onCreateConsultationList = (content: OutputData) => {
    createResearchDocument({
      author: {
        connect: {
          id: doctorId,
        },
      },
      patient: {
        connect: {
          id: patientId,
        },
      },
      content: content,
    });
  };

  const onEditConsultationList = (id: string, content: OutputData) => {
    editConsultationList({
      consultationListId: id,
      edit: {
        author: {
          connect: {
            id: doctorId,
          },
        },
        patient: {
          connect: {
            id: patientId,
          },
        },
        content: content,
      },
    });
  };
  console.log(doctorId);
  return (
    <ResearchDocumentsComponent
      onCreateConsultationList={onCreateConsultationList}
      onEditConsultationList={onEditConsultationList}
      consultationArray={researchDocuments ?? []}
      fileMetadata={{
        patientId,
        authorId: doctorId,
      }}
    ></ResearchDocumentsComponent>
  );
};

export default ResearchDocumentContainer;
