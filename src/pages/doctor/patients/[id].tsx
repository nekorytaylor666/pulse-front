import {
  Box,
  Center,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Spinner,
} from '@chakra-ui/react';
import { useGetUserById } from 'components/pages/PatientPage/graphql/getPatientById';
import PatientProfilePageComponent from 'components/pages/PatientPage/PatientProfile.page';
import AdminLayout from 'layouts/admin/AdminLayout';
import DoctorLayout from 'layouts/doctor/DoctorLayout';
import { useRouter } from 'next/router';
import React from 'react';

const PatientProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error } = useGetUserById(id as string);
  console.log('data: ', data, isLoading, isError, error);
  if (isLoading) {
    return (
      <DoctorLayout>
        <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
          <Skeleton borderRadius={'xl'}>
            <Box h="xl"></Box>
          </Skeleton>

          <SimpleGrid columns={4} pt={24} gap={4}>
            <Skeleton borderRadius={'xl'}>
              <Box h="md"></Box>
            </Skeleton>
            <Skeleton borderRadius={'xl'}>
              <Box h="md"></Box>
            </Skeleton>
            <Skeleton borderRadius={'xl'}>
              <Box h="md"></Box>
            </Skeleton>
            <Skeleton borderRadius={'xl'}>
              <Box h="md"></Box>
            </Skeleton>
          </SimpleGrid>
        </Box>
      </DoctorLayout>
    );
  }
  if (isError) {
    return <div>Error: {error}</div>;
  }
  return (
    <PatientProfilePageComponent
      user={data.getUserById}
      bookings={data.bookingsByUser}
    ></PatientProfilePageComponent>
  );
};

export default PatientProfilePage;
