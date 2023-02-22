import { gql } from '@apollo/client';

export const GET_BOOKINGS_BY_USER_ID = gql`
  query ($userId: String!) {
    bookingsByUser(userId: $userId) {
      id
      uid
      description
      user {
        name
        bio
        email
      }
      title

      startTime
      endTime
    }
  }
`;
