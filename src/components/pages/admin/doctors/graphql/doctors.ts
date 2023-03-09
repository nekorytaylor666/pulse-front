import { graphql } from 'graphql/gql';
import { GetAllDoctorsQuery } from 'graphql/graphql';
export const GET_DOCTORS = graphql(`
  query GetAllDoctors {
    getDoctors {
      id
      user {
        id
        fullName
        email
        address
        createdAt
        phoneNumber
        updatedAt
        avatar
        uniqueName
        updatedAt
      }
      calLink
      calUserId
      specializations {
        name
        id
        description
      }
      clinic {
        address
        name
        id
      }
    }
  }
`);

export const GET_DOCTOR_BY_ID = graphql(`
  query GetDoctorById($id: String!) {
    getDoctorById(doctorId: $id) {
      id
      user {
        id
        fullName
        email
        address
        uniqueName
        createdAt
        phoneNumber
        updatedAt
        updatedAt
        avatar
      }
      calLink
      description
      calUserId
      specializations {
        name
        id
        description
      }
      clinic {
        address
        name
        id
      }
    }
  }
`);

export const CREATE_DOCTOR = graphql(`
  mutation CreateDoctor($doctor: DoctorCreateInput!) {
    createDoctor(doctor: $doctor) {
      calLink
      calUserId
      id
    }
  }
`);

export const UPDATE_DOCTOR = graphql(`
  mutation UpdateDoctor($doctorId: String!, $doctor: DoctorUpdateInput!) {
    updateDoctor(newDoctor: $doctor, doctorId: $doctorId) {
      id
    }
  }
`);

export type Doctors = GetAllDoctorsQuery['getDoctors'];
