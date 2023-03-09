/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import Info from 'components/admin/main/profile/settings/Info';
// Custom components
import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import TextField from 'components/fields/TextField';
import DoctorCreateForm from 'components/pages/admin/doctor/doctorCreateForm';
import { CREATE_DOCTOR } from 'graphql/operations/graphql/doctors';
import { graphQLClient } from 'graphql/client';
import { DoctorCreateInput, Role } from 'graphql/graphql';
import AdminLayout from 'layouts/admin/AdminLayout';
import { queryClient } from 'lib/queryclient';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
export default function NewDoctor() {
  // return <NewDoctor></NewDoctor>;
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const toast = useToast();

  const { mutate } = useMutation(
    (data: DoctorCreateInput) => {
      return graphQLClient.request(CREATE_DOCTOR, {
        doctor: data,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['doctor', id]);
        toast({
          title: 'Доктор успешно обновлен',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      },
    }
  );

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, lg: 1 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
          {/* Column Left */}
          <Flex direction="column">
            <DoctorCreateForm
              onSubmit={(data) => {
                mutate(
                  {
                    description: data.description,
                    user: {
                      create: {
                        email: data.email,
                        fullName: data.fullName,
                        address: data.address,
                        phoneNumber: data.phoneNumber,
                        uniqueName: data.uniqueName,
                        password: data.password,
                      },
                    },
                  },
                  {
                    onSuccess(data) {
                      queryClient.invalidateQueries('doctors');
                      router.push(
                        '/admin/dashboard/doctors/' + data.createDoctor.id
                      );
                    },
                  }
                );
              }}
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
