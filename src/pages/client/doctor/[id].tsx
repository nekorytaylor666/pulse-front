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
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  AspectRatio,
  Skeleton,
} from '@chakra-ui/react';

// Custom components
import Banner from 'components/admin/nfts/page/Banner';
import TableLastOffer from 'components/admin/nfts/page/TableLastOffer';
import Auction from 'components/admin/nfts/page/Auction';
import Description from 'components/admin/nfts/page/Description';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';

// Assets
import Nft2 from '/public/img/nfts/Nft2.png';
import Nft4 from '/public/img/nfts/Nft4.png';
import Nft5 from '/public/img/nfts/Nft5.png';
import Nft6 from '/public/img/nfts/Nft6.png';
import NftLarge1 from '/public/img/nfts/NftLarge1.png';
import Avatar1 from '/public/img/avatars/avatar1.png';
import Avatar2 from '/public/img/avatars/avatar2.png';
import Avatar3 from '/public/img/avatars/avatar3.png';
import Avatar4 from '/public/img/avatars/avatar4.png';
import AvatarSimmmple from '/public/img/avatars/avatarSimmmple.png';
import AdminLayout from 'layouts/admin/AdminLayout';
import tableDataLastOffer from 'variables/nfts/page/tableDataLastOffer';
import ClientLayout from 'layouts/client/ClientLayout';
import { useRouter } from 'next/router';
import {
  GET_DOCTORS,
  GET_DOCTOR_BY_ID,
} from 'graphql/operations/graphql/doctors';
import { graphQLClient } from 'graphql/client';
import { useQuery } from 'react-query';
import EditorDescription from 'components/admin/nfts/page/EditorDescription';
import DoctorDetails from 'components/admin/nfts/page/Auction';
import Doctor from 'components/marketplace/Doctor';
import { useSession } from 'next-auth/react';

export default function DoctorClientPage() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const router = useRouter();
  const { id } = router.query;

  const { data: extraDoctors, isLoading: isExtraDoctorsLoading } = useQuery(
    ['doctors'],
    () => graphQLClient.request(GET_DOCTORS)
  );
  console.log(extraDoctors);
  const doctors = extraDoctors?.getDoctors;
  const { data: auth } = useSession();
  const userId = auth?.user?.id;
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
  if (isLoading || isExtraDoctorsLoading) {
    return (
      <ClientLayout>
        <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
          {/* Main Fields */}
          <Grid
            mb="20px"
            maxW="100%"
            gridTemplateColumns={{
              base: '1fr',
              lg: '1fr 1fr',
              '2xl': '1fr 0.95fr',
            }}
            gap={{ base: '20px', xl: '20px' }}
            display={{ base: 'block', lg: 'grid' }}
          >
            <Flex flexDirection="column" gridArea="1 / 1 / 2 / 2">
              <AspectRatio ratio={1}>
                <Skeleton w={'lg'} h={'2xl'} borderRadius={'md'}></Skeleton>
              </AspectRatio>
            </Flex>
            <Flex flexDirection="column" gridArea="1 / 2 / 2 / 3" pt="60px">
              <Skeleton borderRadius={'md'}></Skeleton>
            </Flex>
          </Grid>
        </Box>
      </ClientLayout>
    );
  }

  const doctor = data?.getDoctorById;
  // Chakra Color Mode
  return (
    <ClientLayout>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        {/* Main Fields */}
        <Grid
          mb="20px"
          maxW="100%"
          gridTemplateColumns={{
            base: '1fr',
            lg: '1fr 1fr',
            '2xl': '1fr 0.95fr',
          }}
          gap={{ base: '20px', xl: '20px' }}
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex flexDirection="column" gridArea="1 / 1 / 2 / 2">
            <AspectRatio ratio={1}>
              <Banner image={doctor.user.avatar ?? NftLarge1} />
            </AspectRatio>
          </Flex>
          <Flex flexDirection="column" gridArea="1 / 2 / 2 / 3" pt="60px">
            <DoctorDetails
              bookingLink={
                process.env.NEXT_PUBLIC_CAL_URL +
                '/' +
                doctor.user.uniqueName +
                '?metadata[pulseUserId]=' +
                userId
              }
              uniqueName={doctor.user.uniqueName}
              name={doctor.user.fullName}
              description={doctor.description}
            />
          </Flex>
        </Grid>

        <Text
          mt="25px"
          mb="36px"
          color={textColor}
          fontSize="2xl"
          ms="24px"
          fontWeight="700"
        >
          Другие доктора
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
          {doctors
            ?.filter((cur) => cur.id !== doctor.id)
            .map((doctor: any) => (
              <Doctor
                key={doctor.id}
                bookingLink={
                  process.env.NEXT_PUBLIC_CAL_URL +
                  '/' +
                  doctor.user.uniqueName +
                  '?metadata[pulseUserId]=' +
                  userId
                }
                email={doctor.user.email}
                image={doctor.user.avatar ?? Avatar4}
                name={doctor.user.fullName}
              ></Doctor>
            ))}
        </SimpleGrid>
      </Box>
    </ClientLayout>
  );
}
