import { Box } from '@chakra-ui/react';
import PatientListPageComponent from 'components/pages/PatientsPage/PatientList.page';
import AdminLayout from 'layouts/admin/AdminLayout';
import React from 'react';

const PatientListPage = () => {
  return (
    <AdminLayout>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        <PatientListPageComponent></PatientListPageComponent>
      </Box>
    </AdminLayout>
  );
};

export default PatientListPage;
