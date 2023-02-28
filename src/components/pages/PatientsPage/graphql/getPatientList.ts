import request from 'graphql-request';
import { graphQLClient } from 'graphql/client';
import { graphql } from 'graphql/gql';
import { useQuery } from 'react-query';

export const GET_PATIENTS = graphql(
  `
    query GetPatients {
      getAllUsers {
        id
        fullName
        email
        createdAt
        phoneNumber
        updatedAt
      }
    }
  `
);
//
// export const useCreateConsultationList = () =>
//   useMutation(
//     async (input: ConsulationListCreateInput) =>
//       request(graphQLClient, CREATE_CONSULTATION_LIST, {
//         createConsultationListCreate: input,
//       }),
//     {
//       onSuccess: () => {
//         // invalidate all queries to update the UI
//         queryCache.invalidateQueries(GET_PATIENTS);
//       },
//     }
//   );
//
export const useGetPatients = () =>
  useQuery(['getPatient'], () => graphQLClient.request(GET_PATIENTS));

// export const usePatientStore = () =>
//   useStore<CurrentPatientStore>(useCurrentPatientStore);
//
// export const useSetPatientId = () => {
//   const setPatientId = usePatientStore((state) => state.setPatientId);
//   return (patientId: string) => setPatientId(patientId);
// };
//
// export const usePatientId = () => usePatientStore((state) => state.patientId);
//
// export const useGetPatient = () => {
//   const patientId = usePatientId();
//   return useQuery<GetPatientQuery, Error>(
//     GET_PATIENT,
//     () => request(graphQLClient, GET_PATIENT, { patientId }),
//     {
//       enabled: !!patientId,
//     }
//   );
// };
//
// export const usePatient = () => {
//   const { data, isLoading } = useGetPatient();
//   const patient = data?.patient;
//   return { patient, isLoading };
// };
//
// export const useSetPatient = () => {
//   const setPatientId = useSetPatientId();
//   const { isLoading, data } = useGetPatient();
//   return (patientId: string) => {
//     if (!isLoading && data?.patient?.id !== patientId) {
//       setPatientId(patientId);
//     }
//   };
// };
//
// export const usePatient
