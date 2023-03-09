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
import { GET_DOCTOR_BY_ID, UPDATE_DOCTOR } from '../doctors/graphql/doctors';
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

const mutationFn_UploadFile = async (
  variables: UseMutationUploadFileVariables
) => {
  const { file, progressCallBack } = variables;

  let fd = new FormData();

  //* order of appends matter, add file as last one, api endpoint is express with multer.
  fd.append('file', file);

  const axiosResponse = await axios.post<any, AxiosResponse<any>, FormData>(
    uploadApiUrl,
    fd,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*/*',
      },
      // @ts-ignore
      onUploadProgress: (progressEvent: ProgressEvent) => {
        return progressCallBack && progressCallBack(progressEvent);
      },
    }
  );
  return axiosResponse.data;
};

export default function DoctorSettings() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const toast = useToast();

  const { mutate: mutateUploadFile } = useMutation(mutationFn_UploadFile, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const { mutate } = useMutation(
    (data: DoctorUpdateInput) => {
      return graphQLClient.request(UPDATE_DOCTOR, {
        doctor: data,
        doctorId: id as string,
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

  const { data, isLoading } = useQuery(
    ['doctor', id],
    () => {
      return graphQLClient.request(GET_DOCTOR_BY_ID, {
        id: id as string,
      });
    },
    {
      enabled: !!id,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Not found</div>;
  }
  const doctor = data?.getDoctorById;

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '150px' }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, lg: 1 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
          {/* Column Left */}
          <Flex direction="column">
            <Profile
              name={doctor.user.fullName}
              avatar={doctor.user.avatar ?? '/'}
              banner={banner}
              onChange={(file) => {
                mutateUploadFile(
                  {
                    file,
                    progressCallBack: (progressEvent) => {
                      console.log(progressEvent);
                    },
                  },
                  {
                    onSuccess: (data) => {
                      queryClient.invalidateQueries(['doctors']);
                      console.log(data);
                      const { file } = data;
                      file?.url as string;
                      mutate({
                        user: {
                          update: {
                            avatar: { set: file?.url as string },
                          },
                        },
                      });
                    },
                  }
                );
              }}
            />
            <Info
              user={doctor.user as PulseUser}
              description={doctor.description}
              onSubmit={(data) => {
                mutate({
                  description: data.description,
                  user: {
                    update: {
                      address: { set: data.address },
                      email: { set: data.email },
                      fullName: { set: data.fullName },
                      phoneNumber: { set: data.phoneNumber },
                      uniqueName: { set: data.uniqueName },
                    },
                  },
                });
              }}
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
