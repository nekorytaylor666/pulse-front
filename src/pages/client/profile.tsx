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
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid,
  Select,
  AspectRatio,
} from '@chakra-ui/react';

// Custom components
import Banner from 'components/admin/nfts/collection/Banner';
import NFT from 'components/card/NFT';
import { SearchBar } from 'components/admin/nfts/collection/Search';

// Assets
import Nft2 from '/public/img/nfts/Nft2.png';
import Nft4 from '/public/img/nfts/Nft4.png';
import Nft5 from '/public/img/nfts/Nft5.png';
import Nft6 from '/public/img/nfts/Nft6.png';
import NftProfile from '/public/img/nfts/NftProfile.png';
import NftBanner2 from '/public/img/nfts/NftBanner2.png';
import Avatar1 from '/public/img/avatars/avatar1.png';
import Avatar2 from '/public/img/avatars/avatar2.png';
import Avatar3 from '/public/img/avatars/avatar3.png';
import Avatar4 from '/public/img/avatars/avatar4.png';

import { MdDashboard, MdApps } from 'react-icons/md';
import AdminLayout from 'layouts/admin/AdminLayout';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import ProfileBanner from 'components/profile/Banner';
import Booking from 'components/profile/BookingCard';
import { useQuery } from '@apollo/client';
import { GET_BOOKINGS_BY_USER_ID } from 'graphql/operations/query/getBookingsByUserId';
import ClientLayout from 'layouts/client/ClientLayout';
import PatientProfilePageComponent from 'components/pages/PatientPage/PatientProfile.page';
import { useGetUserById } from 'components/pages/PatientPage/graphql/getPatientById';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export default function Collection() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' }
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' }
  );

  const session = useSession();
  const { data, isLoading, isError, error } = useGetUserById(
    session?.data?.user?.id ?? ('' as string)
  );

  // if not logged in, redirect to login page
  if (session.status !== 'loading' && !session.data)
    return (
      <ClientLayout>
        <Box>
          <Text>Ошибка входа</Text>
          <Link href={'/auth/sign-in'}>Вход</Link>
        </Box>
      </ClientLayout>
    );

  if (isLoading) return <div>Loading...</div>;
  if (session.status === 'loading') return <div>Loading...</div>;
  console.log(session);
  const user = session?.data?.user;
  const bookings = data?.bookingsByUser;
  // Chakra Color Mode
  console.log(data);
  return (
    <ClientLayout>
      <PatientProfilePageComponent
        isReadonly={true}
        user={data.getUserById}
        bookings={data.bookingsByUser}
      ></PatientProfilePageComponent>
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
