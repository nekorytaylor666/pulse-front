/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
};

export type Appointment = {
  __typename?: 'Appointment';
  author: User;
  authorId: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  patient: User;
  patientId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AppointmentCreateInput = {
  author: UserCreateNestedOneWithoutAppointmentsAsAuthorInput;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AppointmentCreateManyAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  patientId: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AppointmentCreateManyAuthorInputEnvelope = {
  data: Array<AppointmentCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AppointmentCreateManyPatientInput = {
  authorId: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AppointmentCreateManyPatientInputEnvelope = {
  data: Array<AppointmentCreateManyPatientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AppointmentCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<AppointmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppointmentCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<AppointmentCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<AppointmentCreateManyAuthorInputEnvelope>;
};

export type AppointmentCreateNestedManyWithoutPatientInput = {
  connect?: InputMaybe<Array<AppointmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppointmentCreateOrConnectWithoutPatientInput>>;
  create?: InputMaybe<Array<AppointmentCreateWithoutPatientInput>>;
  createMany?: InputMaybe<AppointmentCreateManyPatientInputEnvelope>;
};

export type AppointmentCreateOrConnectWithoutAuthorInput = {
  create: AppointmentCreateWithoutAuthorInput;
  where: AppointmentWhereUniqueInput;
};

export type AppointmentCreateOrConnectWithoutPatientInput = {
  create: AppointmentCreateWithoutPatientInput;
  where: AppointmentWhereUniqueInput;
};

export type AppointmentCreateWithoutAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AppointmentCreateWithoutPatientInput = {
  author: UserCreateNestedOneWithoutAppointmentsAsAuthorInput;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AppointmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
  user: User;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  uniqueName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  createAppointment: Appointment;
  login: Auth;
  refreshToken: Token;
  signUpDoctor: Auth;
  signup: Scalars['Boolean'];
  updateUser: User;
  verifyCode: Auth;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreateAppointmentArgs = {
  create: AppointmentCreateInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT'];
};


export type MutationSignUpDoctorArgs = {
  data: UserCreateInput;
};


export type MutationSignupArgs = {
  data: UserCreateInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationVerifyCodeArgs = {
  code: Scalars['String'];
  data: UserCreateInput;
};

export type Query = {
  __typename?: 'Query';
  appointments: Array<Appointment>;
  me: User;
};

export enum Role {
  Admin = 'ADMIN',
  Doctor = 'DOCTOR',
  Laboratory = 'LABORATORY',
  Patient = 'PATIENT',
  User = 'USER'
}

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  address?: Maybe<Scalars['String']>;
  appointmentsAsAuthor?: Maybe<Array<Appointment>>;
  appointmentsAsPatient?: Maybe<Array<Appointment>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  role: Role;
  uniqueName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  appointmentsAsAuthor: Scalars['Int'];
  appointmentsAsPatient: Scalars['Int'];
};

export type UserCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  appointmentsAsAuthor?: InputMaybe<AppointmentCreateNestedManyWithoutAuthorInput>;
  appointmentsAsPatient?: InputMaybe<AppointmentCreateNestedManyWithoutPatientInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  role?: InputMaybe<Role>;
  uniqueName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutAppointmentsAsAuthorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAppointmentsAsAuthorInput>;
  create?: InputMaybe<UserCreateWithoutAppointmentsAsAuthorInput>;
};

export type UserCreateNestedOneWithoutAppointmentsAsPatientInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAppointmentsAsPatientInput>;
  create?: InputMaybe<UserCreateWithoutAppointmentsAsPatientInput>;
};

export type UserCreateOrConnectWithoutAppointmentsAsAuthorInput = {
  create: UserCreateWithoutAppointmentsAsAuthorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAppointmentsAsPatientInput = {
  create: UserCreateWithoutAppointmentsAsPatientInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAppointmentsAsAuthorInput = {
  address?: InputMaybe<Scalars['String']>;
  appointmentsAsPatient?: InputMaybe<AppointmentCreateNestedManyWithoutPatientInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  role?: InputMaybe<Role>;
  uniqueName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutAppointmentsAsPatientInput = {
  address?: InputMaybe<Scalars['String']>;
  appointmentsAsAuthor?: InputMaybe<AppointmentCreateNestedManyWithoutAuthorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  role?: InputMaybe<Role>;
  uniqueName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  uniqueName?: InputMaybe<Scalars['String']>;
};

export type LoginMutationMutationVariables = Exact<{
  login: LoginInput;
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: any, refreshToken: any, user: { __typename?: 'User', fullName: string, uniqueName: string, email: string, id: string, phoneNumber: string } } };


export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;