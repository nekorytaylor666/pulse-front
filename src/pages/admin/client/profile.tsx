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
import Booking from 'components/profile/Booking';
import { useQuery } from '@apollo/client';
import { GET_BOOKINGS_BY_USER_ID } from 'graphql/operations/query/getBookingsByUserId';
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
  const { data } = useQuery(GET_BOOKINGS_BY_USER_ID, {
    variables: {
      userId: session?.data?.user?.user?.id,
    },
    skip: !session?.data?.user?.user?.id,
  });

  // if not logged in, redirect to login page
  if (session.status !== 'loading' && !session.data)
    return (
      <AdminLayout>
        <Box>
          <Text>Ошибка входа</Text>
          <Link href={'/auth/sign-in'}>Вход</Link>
        </Box>
      </AdminLayout>
    );

  if (session.status === 'loading') return 'Loading...';
  console.log(session);
  const user = session?.data?.user?.user;
  const bookings = data?.bookingsByUser;
  // Chakra Color Mode
  console.log(data);
  return (
    <AdminLayout>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        {/* Main Fields */}
        <Box mb="20px" display={{ base: 'block', lg: 'grid' }}>
          <Flex flexDirection="column">
            <ProfileBanner
              image={NftBanner2}
              profile={NftProfile}
              phoneNumber={user.phoneNumber}
              name={user.fullName}
              floor={0.56}
              volume={33.8}
              owners={4.6}
              items={28}
            />
          </Flex>
        </Box>
        <Flex w="100%">
          <SearchBar />
          {/* <Select
            fontSize="sm"
            id="edit_product"
            variant="main"
            h="44px"
            maxH="44px"
            me={{ base: '10px', md: '20px' }}
          >
            <option value="single">Single Items</option>
            <option value="multiple">Multiple Items</option>
          </Select> */}
          <Select
            fontSize="sm"
            variant="main"
            h="44px"
            maxH="44px"
            me={{ base: '10px', md: '20px' }}
          >
            <option value="low_to_high">По возрастанию</option>
            <option value="high_to_low">По убыванию</option>
          </Select>
          <Button
            me={{ base: '10px', md: '20px' }}
            bg={buttonBg}
            border="1px solid"
            color="secondaryGray.600"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            borderColor={useColorModeValue(
              'secondaryGray.100',
              'whiteAlpha.100'
            )}
            borderRadius="16px"
            _placeholder={{ color: 'secondaryGray.600' }}
            _hover={hoverButton}
            _active={activeButton}
            _focus={activeButton}
          >
            <Icon color={textColor} as={MdDashboard} />
          </Button>
          <Button
            bg={buttonBg}
            border="1px solid"
            color="secondaryGray.600"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            borderColor={useColorModeValue(
              'secondaryGray.100',
              'whiteAlpha.100'
            )}
            borderRadius="16px"
            _placeholder={{ color: 'secondaryGray.600' }}
            _hover={hoverButton}
            _active={activeButton}
            _focus={activeButton}
          >
            <Icon color={textColor} as={MdApps} />
          </Button>
        </Flex>
        <Text
          mt="25px"
          mb="36px"
          color={textColor}
          fontSize="2xl"
          ms="24px"
          fontWeight="700"
        >
          Записи
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
          {/* <Booking
            bookingLink="/"
            doctorAvatar={Avatar4}
            doctorName="Леопольд"
            image="/img/nfts/Nft2.png"
            price={100}
            serviceName="Консультация"
          /> */}
          {bookings?.map((booking: any) => (
            <Booking
              key={booking.id}
              startTime={booking.startTime}
              endTime={booking.endTime}
              bookingLink={'http://localhost:3000/booking/' + booking.uid}
              doctorAvatar={Avatar4}
              doctorName={booking.user.fullName}
              price={100}
              serviceName={booking.title}
            />
          ))}
        </SimpleGrid>

        {/* Delete Product */}
      </Box>
    </AdminLayout>
  );
}
