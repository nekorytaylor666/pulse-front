import {
  Flex,
  Select,
  Button,
  Icon,
  SimpleGrid,
  Text,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import LinkButton from 'components/link/LinkButton';
import DoctorSearchModal from 'components/marketplace/doctorSearch';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import BookingCard from 'components/profile/BookingCard';
import { Booking, Maybe } from 'graphql/graphql';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdDashboard, MdApps } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { useCurDoctorForwardStore } from 'stores/curDoctorForward/curDoctorForward';
import Avatar4 from '/public/img/avatars/avatar4.png';
const BookingListComponent = ({
  bookings,
  isReadOnly,
}: {
  bookings: any[];
  isReadOnly: boolean;
}) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const { t } = useTranslation('common');
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' }
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' }
  );
  const { doctor } = useCurDoctorForwardStore();
  const patientId = router.query.id;
  const bookingLink =
    doctor &&
    process.env.NEXT_PUBLIC_CAL_URL +
      '/' +
      doctor.user.uniqueName +
      '?metadata[pulseUserId]=' +
      patientId +
      '&metadata[doctorId]=' +
      doctor.id;
  return (
    <>
      <DoctorSearchModal isOpen={isOpen} onClose={onClose}></DoctorSearchModal>
      <Flex my={'8'} align="center" justify={'space-between'}>
        <Heading size={'lg'}> {t('booking')}</Heading>
        {!isReadOnly && (
          <Flex direction={'row'} gap={4}>
            <Button colorScheme={'blue'} onClick={onOpen}>
              Выбрать врача
            </Button>
            <LinkButton href={bookingLink ?? ''} colorScheme={'blue'}>
              Создать направление
            </LinkButton>
          </Flex>
        )}
      </Flex>
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
            bookingLink={
              process.env.NEXT_PUBLIC_CAL_URL + '/booking/' + booking.uid
            }
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
