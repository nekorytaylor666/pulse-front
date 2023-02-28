import { useGetUserById } from 'components/pages/PatientPage/graphql/getPatientById';
import PatientProfilePageComponent from 'components/pages/PatientPage/PatientProfile.page';
import { useRouter } from 'next/router';
import React from 'react';

const PatientProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error } = useGetUserById(id as string);
  console.log('data: ', data, isLoading, isError, error);
  if (isLoading) {
    return <div>Loading...</div>;
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
