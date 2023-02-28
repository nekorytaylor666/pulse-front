import { Box, Link, Text } from '@chakra-ui/react';
import request from 'graphql-request';
import { graphQLClient } from 'graphql/client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useQuery } from 'react-query';
import { Booking } from '../PatientProfile.page';
import BookingListComponent from './BookingList.component';
import { GET_USER_BOOKINGS } from './graphql/getBooking';

interface Props {
  bookings: Booking[];
}

const BookingListContainter: React.FC<Props> = (props) => {
  const { bookings } = props;

  return <BookingListComponent bookings={bookings}></BookingListComponent>;
};

export default BookingListContainter;
