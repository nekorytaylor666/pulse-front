import { useToast } from '@chakra-ui/react';
import { OutputData } from '@editorjs/editorjs';
import { graphQLClient } from 'graphql/client';
import {
  ConsulationListCreateInput,
  CreataeConsultationListMutation,
  CreataeConsultationListMutationVariables,
} from 'graphql/graphql';
import { useRouter } from 'next/router';
import React from 'react';
import { useMutation } from 'react-query';
import { useCurrentPatientStore } from 'stores/currentPatient/currentPatient.store';
import { useGetUserById } from '../graphql/getPatientById';
import ConsultationListComponent from './ConsultationList.component';
import { CREATE_CONSULTATION_LIST } from './graphql/CreateConsultationList';

export type ConsultationLists = ReturnType<
  typeof useGetUserById
>['data']['getUserById']['appointmentsAsPatient'];

interface Props {
  consultationLists: ConsultationLists;
}

const ConsultationListContainer: React.FC<Props> = (props) => {
  const { consultationLists } = props;
  const patientId = useRouter().query.id as string;
  const toast = useToast();
  const { mutate } = useMutation(
    'createConsultationList',
    (data: ConsulationListCreateInput) => {
      return graphQLClient.request(CREATE_CONSULTATION_LIST, {
        createConsultationListCreate: { ...data },
      });
    },
    {
      onSuccess(data: CreataeConsultationListMutation) {
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

  const onCreateConsultationList = (data: OutputData) => {
    mutate({
      author: {
        connect: {
          id: '63ef2ba5a8ee6bfeba0616b2',
        },
      },
      patient: {
        connect: {
          id: patientId,
        },
      },
      content: data,
    });
  };

  return (
    <ConsultationListComponent
      onCreateConsultationList={onCreateConsultationList}
      consultationArray={consultationLists}
    ></ConsultationListComponent>
  );
};

export default ConsultationListContainer;
