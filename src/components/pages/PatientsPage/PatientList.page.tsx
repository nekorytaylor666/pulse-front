import React from 'react';
import { useQuery } from 'react-query';
import { graphQLClient } from 'graphql/client';
import { list } from '@chakra-ui/system';
import page from 'pages/admin/nfts/page';
import { create } from 'zustand';
import { useGetPatients } from './graphql/getPatientList';
import PatientListTable from './PatientList/patientList.component';

const PatientListPageComponent = () => {
  const { data, isLoading, isError, error } = useGetPatients();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {(error as any)?.message}</div>;
  }
  return (
    <PatientListTable tableData={data.getAllUsers || []}></PatientListTable>
  );
};

// create a patient list table component using chakra ui data table

export default PatientListPageComponent;
