import { graphql } from 'graphql/gql';

export const GET_USER_BOOKINGS = graphql(`
  query GET_BOOKINGS_BY_USER_ID($userId: String!) {
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
`);
