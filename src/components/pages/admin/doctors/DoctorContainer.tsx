import { Flex } from '@chakra-ui/react';
import DoctorsTable from 'components/doctors-table/DoctorTable';
import { graphQLClient } from 'graphql/client';
import AdminLayout from 'layouts/admin/AdminLayout';
import React from 'react';
import { useQuery } from 'react-query';
import tableDataManagement from 'variables/account/application/tableDataManagement';
import { GET_DOCTORS } from './graphql/doctors';

const DoctorContainer = () => {
  const { data, isLoading, isError, error } = useQuery(
    ['doctors'],
    async () => {
      return graphQLClient.request(GET_DOCTORS);
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <AdminLayout>
      <Flex pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <Flex direction="column" width="stretch">
          <DoctorsTable tableData={data.getDoctors} />
        </Flex>
      </Flex>
    </AdminLayout>
  );
};

export default DoctorContainer;
