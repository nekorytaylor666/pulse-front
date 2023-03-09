import { graphql } from 'graphql/gql';
export const GET_CLINICS = graphql(`
  query GetClinics {
    getClinics {
      coverPhoto
      address
      createdAt
      description
      doctors {
        id
        clinic {
          address
          id
          name
        }
        description
        specializations {
          name
          description
          id
        }
        user {
          id
          fullName
          avatar
          phoneNumber
          email
          uniqueName
        }
      }
      email
      id
      name
      phoneNumber
    }
  }
`);

export const GET_CLINIC_BY_ID = graphql(`
  query GetClinicById($id: String!) {
    getClinicById(clinicId: $id) {
      coverPhoto
      address
      createdAt
      description
      doctors {
        id
        clinic {
          address
          id
          name
        }
        description
        specializations {
          name
          description
          id
        }
        user {
          id
          fullName
          avatar
          phoneNumber
          email
          uniqueName
        }
      }
      email
      id
      name
      phoneNumber
    }
  }
`);
