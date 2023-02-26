import { Box, Link, Text } from '@chakra-ui/react';
import request from 'graphql-request';
import { graphQLClient } from 'graphql/client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useQuery } from 'react-query';
import BookingListComponent from './BookingList.component';
import { GET_USER_BOOKINGS } from './graphql/getBooking';

const BookingListContainter = () => {
  const session = useSession();
  const userId = session?.data?.user?.user?.id;

  const { data } = useQuery(['bookings'], () =>
    graphQLClient.request(GET_USER_BOOKINGS, { userId })
  );
  if (session.status !== 'loading' && !session.data)
    return (
      <Box>
        <Text>Ошибка входа</Text>
        <Link href={'/auth/sign-in'}>Вход</Link>
      </Box>
    );

  if (session.status === 'loading') return <div>'Loading...'</div>;
  const bookings = data?.bookingsByUser;
  return <BookingListComponent bookings={bookings}></BookingListComponent>;
};

export default BookingListContainter;
