/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetConsultationListById($consultationListId: String!) {\n    getConsultationListById(consultationListId: $consultationListId) {\n      id\n      content\n      patient {\n        id\n        fullName\n        email\n        phoneNumber\n        address\n      }\n      author {\n        fullName\n        phoneNumber\n        email\n        address\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetConsultationListByIdDocument,
    "\n  query GET_BOOKINGS_BY_USER_ID($userId: String!) {\n    bookingsByUser(userId: $userId) {\n      id\n      uid\n      description\n      user {\n        name\n        bio\n        email\n      }\n      title\n\n      startTime\n      endTime\n    }\n  }\n": types.Get_Bookings_By_User_IdDocument,
    "\n    mutation CreataeConsultationList(\n      $createConsultationListCreate: ConsulationListCreateInput!\n    ) {\n      createConsultationList(create: $createConsultationListCreate) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  ": types.CreataeConsultationListDocument,
    "\n    mutation EditConsultationList(\n      $consultationListId: String!\n      $edit: ConsulationListCreateInput!\n    ) {\n      editConsultationList(\n        consultationListId: $consultationListId\n        edit: $edit\n      ) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  ": types.EditConsultationListDocument,
    "\n    mutation CreateResearchDocument($create: ResearchDocumentCreateInput!) {\n      createResearchDocument(create: $create) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  ": types.CreateResearchDocumentDocument,
    "\n    mutation EditResearchDocument(\n      $edit: ResearchDocumentCreateInput!\n      $researchDocumentId: String!\n    ) {\n      editResearchDocument(\n        edit: $edit\n        researchDocumentId: $researchDocumentId\n      ) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  ": types.EditResearchDocumentDocument,
    "\n  query GetUserById($userId: String!) {\n    getUserById(id: $userId) {\n      fullName\n      id\n      email\n      createdAt\n      phoneNumber\n      updatedAt\n      appointmentsAsPatient {\n        author {\n          email\n          fullName\n          id\n          phoneNumber\n          uniqueName\n        }\n        content\n        createdAt\n        id\n        updatedAt\n      }\n      researchDocumentsAsPatient {\n        author {\n          email\n          fullName\n          id\n          phoneNumber\n          uniqueName\n        }\n        content\n        createdAt\n        id\n        updatedAt\n      }\n      uniqueName\n      address\n    }\n    bookingsByUser(userId: $userId) {\n      id\n      uid\n      description\n      user {\n        name\n        bio\n        email\n      }\n      title\n\n      startTime\n      endTime\n    }\n  }\n": types.GetUserByIdDocument,
    "\n    query GetPatients {\n      getAllUsers {\n        id\n        fullName\n        email\n        createdAt\n        phoneNumber\n        updatedAt\n      }\n    }\n  ": types.GetPatientsDocument,
    "\n  query GetResearchDocumentById($researchDocumentId: String!) {\n    getResearchDocumentById(researchDocumentId: $researchDocumentId) {\n      id\n      content\n      patient {\n        id\n        fullName\n        email\n        phoneNumber\n        address\n      }\n      author {\n        fullName\n        phoneNumber\n        email\n        address\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetResearchDocumentByIdDocument,
    "\n  query GetAllDoctors {\n    getDoctors {\n      id\n      user {\n        id\n        fullName\n        email\n        address\n        createdAt\n        phoneNumber\n        updatedAt\n        avatar\n        uniqueName\n        updatedAt\n      }\n      calLink\n      calUserId\n      specializations {\n        name\n        id\n        description\n      }\n    }\n  }\n": types.GetAllDoctorsDocument,
    "\n  query GetDoctorById($id: String!) {\n    getDoctorById(doctorId: $id) {\n      id\n      user {\n        id\n        fullName\n        email\n        address\n        uniqueName\n        createdAt\n        phoneNumber\n        updatedAt\n        updatedAt\n        avatar\n      }\n      calLink\n      description\n      calUserId\n      specializations {\n        name\n        id\n        description\n      }\n    }\n  }\n": types.GetDoctorByIdDocument,
    "\n  mutation CreateDoctor($doctor: DoctorCreateInput!) {\n    createDoctor(doctor: $doctor) {\n      calLink\n      calUserId\n      id\n    }\n  }\n": types.CreateDoctorDocument,
    "\n  mutation UpdateDoctor($doctorId: String!, $doctor: DoctorUpdateInput!) {\n    updateDoctor(newDoctor: $doctor, doctorId: $doctorId) {\n      id\n    }\n  }\n": types.UpdateDoctorDocument,
    "\n  mutation Signup($data: SignupInput!) {\n    signup(data: $data)\n  }\n": types.SignupDocument,
    "\n  mutation VerifyCode($code: String!, $verifyCodeData: SignupInput!) {\n    verifyCode(code: $code, data: $verifyCodeData) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.VerifyCodeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetConsultationListById($consultationListId: String!) {\n    getConsultationListById(consultationListId: $consultationListId) {\n      id\n      content\n      patient {\n        id\n        fullName\n        email\n        phoneNumber\n        address\n      }\n      author {\n        fullName\n        phoneNumber\n        email\n        address\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetConsultationListById($consultationListId: String!) {\n    getConsultationListById(consultationListId: $consultationListId) {\n      id\n      content\n      patient {\n        id\n        fullName\n        email\n        phoneNumber\n        address\n      }\n      author {\n        fullName\n        phoneNumber\n        email\n        address\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_BOOKINGS_BY_USER_ID($userId: String!) {\n    bookingsByUser(userId: $userId) {\n      id\n      uid\n      description\n      user {\n        name\n        bio\n        email\n      }\n      title\n\n      startTime\n      endTime\n    }\n  }\n"): (typeof documents)["\n  query GET_BOOKINGS_BY_USER_ID($userId: String!) {\n    bookingsByUser(userId: $userId) {\n      id\n      uid\n      description\n      user {\n        name\n        bio\n        email\n      }\n      title\n\n      startTime\n      endTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreataeConsultationList(\n      $createConsultationListCreate: ConsulationListCreateInput!\n    ) {\n      createConsultationList(create: $createConsultationListCreate) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "): (typeof documents)["\n    mutation CreataeConsultationList(\n      $createConsultationListCreate: ConsulationListCreateInput!\n    ) {\n      createConsultationList(create: $createConsultationListCreate) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation EditConsultationList(\n      $consultationListId: String!\n      $edit: ConsulationListCreateInput!\n    ) {\n      editConsultationList(\n        consultationListId: $consultationListId\n        edit: $edit\n      ) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "): (typeof documents)["\n    mutation EditConsultationList(\n      $consultationListId: String!\n      $edit: ConsulationListCreateInput!\n    ) {\n      editConsultationList(\n        consultationListId: $consultationListId\n        edit: $edit\n      ) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateResearchDocument($create: ResearchDocumentCreateInput!) {\n      createResearchDocument(create: $create) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "): (typeof documents)["\n    mutation CreateResearchDocument($create: ResearchDocumentCreateInput!) {\n      createResearchDocument(create: $create) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation EditResearchDocument(\n      $edit: ResearchDocumentCreateInput!\n      $researchDocumentId: String!\n    ) {\n      editResearchDocument(\n        edit: $edit\n        researchDocumentId: $researchDocumentId\n      ) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "): (typeof documents)["\n    mutation EditResearchDocument(\n      $edit: ResearchDocumentCreateInput!\n      $researchDocumentId: String!\n    ) {\n      editResearchDocument(\n        edit: $edit\n        researchDocumentId: $researchDocumentId\n      ) {\n        authorId\n        content\n        id\n        patientId\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserById($userId: String!) {\n    getUserById(id: $userId) {\n      fullName\n      id\n      email\n      createdAt\n      phoneNumber\n      updatedAt\n      appointmentsAsPatient {\n        author {\n          email\n          fullName\n          id\n          phoneNumber\n          uniqueName\n        }\n        content\n        createdAt\n        id\n        updatedAt\n      }\n      researchDocumentsAsPatient {\n        author {\n          email\n          fullName\n          id\n          phoneNumber\n          uniqueName\n        }\n        content\n        createdAt\n        id\n        updatedAt\n      }\n      uniqueName\n      address\n    }\n    bookingsByUser(userId: $userId) {\n      id\n      uid\n      description\n      user {\n        name\n        bio\n        email\n      }\n      title\n\n      startTime\n      endTime\n    }\n  }\n"): (typeof documents)["\n  query GetUserById($userId: String!) {\n    getUserById(id: $userId) {\n      fullName\n      id\n      email\n      createdAt\n      phoneNumber\n      updatedAt\n      appointmentsAsPatient {\n        author {\n          email\n          fullName\n          id\n          phoneNumber\n          uniqueName\n        }\n        content\n        createdAt\n        id\n        updatedAt\n      }\n      researchDocumentsAsPatient {\n        author {\n          email\n          fullName\n          id\n          phoneNumber\n          uniqueName\n        }\n        content\n        createdAt\n        id\n        updatedAt\n      }\n      uniqueName\n      address\n    }\n    bookingsByUser(userId: $userId) {\n      id\n      uid\n      description\n      user {\n        name\n        bio\n        email\n      }\n      title\n\n      startTime\n      endTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPatients {\n      getAllUsers {\n        id\n        fullName\n        email\n        createdAt\n        phoneNumber\n        updatedAt\n      }\n    }\n  "): (typeof documents)["\n    query GetPatients {\n      getAllUsers {\n        id\n        fullName\n        email\n        createdAt\n        phoneNumber\n        updatedAt\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetResearchDocumentById($researchDocumentId: String!) {\n    getResearchDocumentById(researchDocumentId: $researchDocumentId) {\n      id\n      content\n      patient {\n        id\n        fullName\n        email\n        phoneNumber\n        address\n      }\n      author {\n        fullName\n        phoneNumber\n        email\n        address\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetResearchDocumentById($researchDocumentId: String!) {\n    getResearchDocumentById(researchDocumentId: $researchDocumentId) {\n      id\n      content\n      patient {\n        id\n        fullName\n        email\n        phoneNumber\n        address\n      }\n      author {\n        fullName\n        phoneNumber\n        email\n        address\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllDoctors {\n    getDoctors {\n      id\n      user {\n        id\n        fullName\n        email\n        address\n        createdAt\n        phoneNumber\n        updatedAt\n        avatar\n        uniqueName\n        updatedAt\n      }\n      calLink\n      calUserId\n      specializations {\n        name\n        id\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllDoctors {\n    getDoctors {\n      id\n      user {\n        id\n        fullName\n        email\n        address\n        createdAt\n        phoneNumber\n        updatedAt\n        avatar\n        uniqueName\n        updatedAt\n      }\n      calLink\n      calUserId\n      specializations {\n        name\n        id\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDoctorById($id: String!) {\n    getDoctorById(doctorId: $id) {\n      id\n      user {\n        id\n        fullName\n        email\n        address\n        uniqueName\n        createdAt\n        phoneNumber\n        updatedAt\n        updatedAt\n        avatar\n      }\n      calLink\n      description\n      calUserId\n      specializations {\n        name\n        id\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDoctorById($id: String!) {\n    getDoctorById(doctorId: $id) {\n      id\n      user {\n        id\n        fullName\n        email\n        address\n        uniqueName\n        createdAt\n        phoneNumber\n        updatedAt\n        updatedAt\n        avatar\n      }\n      calLink\n      description\n      calUserId\n      specializations {\n        name\n        id\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateDoctor($doctor: DoctorCreateInput!) {\n    createDoctor(doctor: $doctor) {\n      calLink\n      calUserId\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateDoctor($doctor: DoctorCreateInput!) {\n    createDoctor(doctor: $doctor) {\n      calLink\n      calUserId\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateDoctor($doctorId: String!, $doctor: DoctorUpdateInput!) {\n    updateDoctor(newDoctor: $doctor, doctorId: $doctorId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDoctor($doctorId: String!, $doctor: DoctorUpdateInput!) {\n    updateDoctor(newDoctor: $doctor, doctorId: $doctorId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Signup($data: SignupInput!) {\n    signup(data: $data)\n  }\n"): (typeof documents)["\n  mutation Signup($data: SignupInput!) {\n    signup(data: $data)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation VerifyCode($code: String!, $verifyCodeData: SignupInput!) {\n    verifyCode(code: $code, data: $verifyCodeData) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyCode($code: String!, $verifyCodeData: SignupInput!) {\n    verifyCode(code: $code, data: $verifyCodeData) {\n      accessToken\n      refreshToken\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;