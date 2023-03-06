import { Box } from '@chakra-ui/react';
import PatientListPageComponent from 'components/pages/PatientsPage/PatientList.page';
import AdminLayout from 'layouts/admin/AdminLayout';
import DoctorLayout from 'layouts/doctor/DoctorLayout';
import React from 'react';

const PatientListPage = () => {
  return (
    <DoctorLayout>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        <PatientListPageComponent></PatientListPageComponent>
      </Box>
    </DoctorLayout>
  );
};

export default PatientListPage;
