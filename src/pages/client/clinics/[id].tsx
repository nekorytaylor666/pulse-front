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
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import Link from 'components/link/Link';

// Custom components
import Banner from 'components/admin/nfts/marketplace/Banner';
import TableTopCreators from 'components/admin/nfts/marketplace/TableTopCreators';
import HistoryItem from 'components/admin/nfts/marketplace/HistoryItem';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';

// Assets
import Nft1 from '/public/img/nfts/Nft1.png';
import Nft2 from '/public/img/nfts/Nft2.png';
import Nft3 from '/public/img/nfts/Nft3.png';
import Nft4 from '/public/img/nfts/Nft4.png';
import Nft5 from '/public/img/nfts/Nft5.png';
import Nft6 from '/public/img/nfts/Nft6.png';
import Avatar1 from '/public/img/avatars/avatar1.png';
import Avatar2 from '/public/img/avatars/avatar2.png';
import Avatar3 from '/public/img/avatars/avatar3.png';
import Avatar4 from '/public/img/avatars/avatar4.png';
import AdminLayout from 'layouts/admin/AdminLayout';
import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';
import MarketplaceBanner from 'components/marketplace/Banner';
import Doctor from 'components/marketplace/DoctorCard';
import { useSession } from 'next-auth/react';
import { GET_DOCTORS } from 'components/pages/admin/doctors/graphql/doctors';
import ClientLayout from 'layouts/client/ClientLayout';
import { useQuery } from 'react-query';
import { graphQLClient } from 'graphql/client';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { GET_CLINIC_BY_ID } from 'components/marketplace/graphql/clinics';
import ClinicBanner from 'components/marketplace/ClinicsBanner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ClinicsDoctors() {
  // Chakra Color Mode

  const { t } = useTranslation('common');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const router = useRouter();
  const { id } = router.query;
  const { data: auth } = useSession();

  const { data, isLoading, error } = useQuery(['clinic', id], () => {
    return graphQLClient.request(GET_CLINIC_BY_ID, { id: id as string });
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const doctors = data?.getClinicById.doctors;
  const userId = auth?.user?.id;
  console.log('userid:', doctors, isLoading, error);
  return (
    <ClientLayout>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        <Grid
          mb="20px"
          gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr ' }}
          gap={{ base: '20px', xl: '20px' }}
          display={{ base: 'block', xl: 'grid' }}
        >
          <Flex
            flexDirection="column"
            gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
          >
            <ClinicBanner
              title={data.getClinicById.name}
              subtitle={data.getClinicById.description}
            />
            <Flex direction="column">
              <Flex
                mt="45px"
                mb="20px"
                justifyContent="space-between"
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'start', md: 'center' }}
              >
                <Text
                  color={textColor}
                  fontSize="2xl"
                  ms="24px"
                  fontWeight="700"
                >
                  {t('doctors')}
                </Text>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
                {doctors?.map((doctor: any) => (
                  <Doctor
                    id={doctor.id}
                    key={doctor.id}
                    bookingLink={
                      'http://localhost:3000/' +
                      doctor.user.uniqueName +
                      '?metadata[pulseUserId]=' +
                      userId
                    }
                    email={doctor.user.email}
                    clinic={doctor.clinic}
                    image={doctor.user.avatar ?? Avatar4}
                    name={doctor.user.fullName}
                  ></Doctor>
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Grid>
        {/* Delete Product */}
      </Box>
    </ClientLayout>
  );
}
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}
