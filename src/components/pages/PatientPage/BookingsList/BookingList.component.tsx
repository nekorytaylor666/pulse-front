import { Flex, Select, Button, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import BookingCard from 'components/profile/BookingCard';
import { Booking, Maybe } from 'graphql/graphql';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdDashboard, MdApps } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';
import Avatar4 from '/public/img/avatars/avatar4.png';
const BookingListComponent = ({ bookings }: { bookings: any[] }) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const { t } = useTranslation('common');
  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' }
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' }
  );
  return (
    <>
      <Text
        mt="25px"
        mb="36px"
        color={textColor}
        fontSize="2xl"
        ms="24px"
        fontWeight="700"
      >
        {t('booking')}
      </Text>
      {bookings.length === 0 && (
        <Flex align="center" justify={'center'} direction={'column'} h={'100%'}>
          <Icon as={RiEmotionHappyLine} w={'100px'} h={'100px'} />
          <Text mt={'4'}>{t('no_results')}</Text>
        </Flex>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
        {/* <Booking
      bookingLink="/"
      doctorAvatar={Avatar4}
      doctorName="Леопольд"
      image="/img/nfts/Nft2.png"
      price={100}
      serviceName="Консультация"
    /> */}
        {bookings?.map((booking) => (
          <BookingCard
            key={booking.id}
            startTime={booking.startTime}
            endTime={booking.endTime}
            bookingLink={'http://localhost:3000/booking/' + booking.uid}
            doctorAvatar={Avatar4}
            doctorName={booking.user.username}
            price={100}
            serviceName={booking.title}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookingListComponent;
