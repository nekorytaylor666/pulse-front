import { useToast } from '@chakra-ui/react';
import { OutputData } from '@editorjs/editorjs';
import { graphQLClient } from 'graphql/client';
import {
  ConsulationListCreateInput,
  CreataeConsultationListMutation,
  CreataeConsultationListMutationVariables,
  EditConsultationListMutation,
  EditConsultationListMutationVariables,
} from 'graphql/graphql';
import { queryClient } from 'lib/queryclient';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MutateFunction, useMutation } from 'react-query';
import { useCurrentPatientStore } from 'stores/currentPatient/currentPatient.store';
import { useGetUserById } from '../graphql/getPatientById';
import ConsultationListComponent from './ConsultationList.component';
import {
  CREATE_CONSULTATION_LIST,
  EDIT_CONSULTATION_LIST,
} from './graphql/ConsultationList';

export type ConsultationLists = ReturnType<
  typeof useGetUserById
>['data']['getUserById']['appointmentsAsPatient'];

interface Props {
  consultationLists: ConsultationLists;
  isReadOnly?: boolean;
}

const ConsultationListContainer: React.FC<Props> = (props) => {
  const { consultationLists, isReadOnly } = props;
  const patientId = useRouter().query.id as string;
  const toast = useToast();
  const session = useSession();
  const doctor = session.data?.user;
  const doctorId = doctor?.id;
  const { mutate: createConsultationList } = useMutation(
    ['createConsultationList'],
    (data: ConsulationListCreateInput) => {
      return graphQLClient.request(CREATE_CONSULTATION_LIST, {
        createConsultationListCreate: { ...data },
      });
    },
    {
      onSuccess(data: CreataeConsultationListMutation) {
        queryClient.invalidateQueries('getUserById');
        if (data.createConsultationList) {
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
      graphQLClient.request(EDIT_CONSULTATION_LIST, {
        consultationListId: data.consultationListId,
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
    createConsultationList({
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
  console.log('authorid', doctorId);
  return (
    <ConsultationListComponent
      isReadOnly={isReadOnly}
      onCreateConsultationList={onCreateConsultationList}
      onEditConsultationList={onEditConsultationList}
      consultationArray={consultationLists}
      fileMetadata={{
        patientId,
        authorId: doctorId,
      }}
    ></ConsultationListComponent>
  );
};

export default ConsultationListContainer;
