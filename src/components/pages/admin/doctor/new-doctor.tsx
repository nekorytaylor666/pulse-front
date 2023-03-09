// Chakra imports
import { Box, Flex, SimpleGrid, useToast } from '@chakra-ui/react';
// Assets
import banner from '/public/img/auth/banner.png';
import profile from '/public/img/crm/vbz.png';
import AdminLayout from 'layouts/admin/AdminLayout';

// Custom components
import Info from 'components/admin/main/profile/settings/Info';
import Password from 'components/admin/main/profile/settings/Password';
import Profile from 'components/admin/main/profile/settings/Profile';
import Socials from 'components/admin/main/profile/settings/Socials';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { graphQLClient } from 'graphql/client';
import {
  CREATE_DOCTOR,
  GET_DOCTOR_BY_ID,
  UPDATE_DOCTOR,
} from '../../../../graphql/operations/graphql/doctors';
import {
  DoctorCreateInput,
  DoctorUpdateInput,
  MutationUpdateDoctorArgs,
  PulseUser,
} from 'graphql/graphql';
import { queryClient } from 'lib/queryclient';
import axios, { AxiosProgressEvent, AxiosResponse } from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const uploadApiUrl = `${apiUrl}/filemanager`;
export interface UseMutationUploadFileVariables {
  progressCallBack?: (progressEvent: ProgressEvent) => void;
  file: File;
}

export default function DoctorSettings() {
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
            {/* <Info
              onSubmit={(data) => {
                mutate({
                  user: {
                    create: {
                      email: data.email,
                      fullName: data.fullName,
                      address: data.address,
                      phoneNumber: data.phoneNumber,
                      uniqueName: data.uniqueName,
                      password: 'secret42',
                    },
                  },
                });
              }}
            /> */}
          </Flex>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
