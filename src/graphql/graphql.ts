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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type ApiKey = {
  __typename?: 'ApiKey';
  app?: Maybe<App>;
  appId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  hashedKey: Scalars['String'];
  id: Scalars['ID'];
  lastUsedAt?: Maybe<Scalars['DateTime']>;
  note?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type App = {
  __typename?: 'App';
  ApiKey?: Maybe<Array<ApiKey>>;
  Webhook?: Maybe<Array<Webhook>>;
  _count: AppCount;
  categories?: Maybe<Array<AppCategories>>;
  createdAt: Scalars['DateTime'];
  credentials?: Maybe<Array<Credential>>;
  dirName: Scalars['String'];
  enabled: Scalars['Boolean'];
  keys?: Maybe<Scalars['JSON']>;
  slug: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export enum AppCategories {
  Analytics = 'analytics',
  Automation = 'automation',
  Calendar = 'calendar',
  Messaging = 'messaging',
  Other = 'other',
  Payment = 'payment',
  Video = 'video',
  Web3 = 'web3'
}

export type AppCount = {
  __typename?: 'AppCount';
  ApiKey: Scalars['Int'];
  Webhook: Scalars['Int'];
  credentials: Scalars['Int'];
};

export type App_RoutingForms_Form = {
  __typename?: 'App_RoutingForms_Form';
  _count: App_RoutingForms_FormCount;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  disabled: Scalars['Boolean'];
  fields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  responses?: Maybe<Array<App_RoutingForms_FormResponse>>;
  routes?: Maybe<Scalars['JSON']>;
  settings?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type App_RoutingForms_FormCount = {
  __typename?: 'App_RoutingForms_FormCount';
  responses: Scalars['Int'];
};

export type App_RoutingForms_FormResponse = {
  __typename?: 'App_RoutingForms_FormResponse';
  createdAt: Scalars['DateTime'];
  form: App_RoutingForms_Form;
  formFillerId: Scalars['String'];
  formId: Scalars['String'];
  id: Scalars['ID'];
  response: Scalars['JSON'];
};

export type Appointment = {
  __typename?: 'Appointment';
  author: PulseUserId;
  authorId: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  patient: PulseUserId;
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

export type Attendee = {
  __typename?: 'Attendee';
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  pulseUserId?: Maybe<Scalars['String']>;
  timeZone: Scalars['String'];
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
  user: PulseUserId;
};

export type Availability = {
  __typename?: 'Availability';
  Schedule?: Maybe<Schedule>;
  date?: Maybe<Scalars['DateTime']>;
  days?: Maybe<Array<Scalars['Int']>>;
  endTime: Scalars['DateTime'];
  eventType?: Maybe<EventType>;
  eventTypeId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  scheduleId?: Maybe<Scalars['Int']>;
  startTime: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type Booking = {
  __typename?: 'Booking';
  _count: BookingCount;
  attendees?: Maybe<Array<Attendee>>;
  cancellationReason?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customInputs?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  destinationCalendar?: Maybe<DestinationCalendar>;
  destinationCalendarId?: Maybe<Scalars['Int']>;
  dynamicEventSlugRef?: Maybe<Scalars['String']>;
  dynamicGroupSlugRef?: Maybe<Scalars['String']>;
  endTime: Scalars['DateTime'];
  eventType?: Maybe<EventType>;
  eventTypeId?: Maybe<Scalars['Int']>;
  fromReschedule?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  paid: Scalars['Boolean'];
  payment?: Maybe<Array<Payment>>;
  recurringEventId?: Maybe<Scalars['String']>;
  references?: Maybe<Array<BookingReference>>;
  rejectionReason?: Maybe<Scalars['String']>;
  rescheduled?: Maybe<Scalars['Boolean']>;
  scheduledJobs?: Maybe<Array<Scalars['String']>>;
  smsReminderNumber?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  status: BookingStatus;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  workflowReminders?: Maybe<Array<WorkflowReminder>>;
};

export type BookingCount = {
  __typename?: 'BookingCount';
  attendees: Scalars['Int'];
  payment: Scalars['Int'];
  references: Scalars['Int'];
  workflowReminders: Scalars['Int'];
};

export type BookingReference = {
  __typename?: 'BookingReference';
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['Int']>;
  credentialId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  externalCalendarId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meetingId?: Maybe<Scalars['String']>;
  meetingPassword?: Maybe<Scalars['String']>;
  meetingUrl?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  uid: Scalars['String'];
};

export enum BookingStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Credential = {
  __typename?: 'Credential';
  _count: CredentialCount;
  app?: Maybe<App>;
  appId?: Maybe<Scalars['String']>;
  destinationCalendars?: Maybe<Array<DestinationCalendar>>;
  id: Scalars['ID'];
  invalid?: Maybe<Scalars['Boolean']>;
  key: Scalars['JSON'];
  type: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type CredentialCount = {
  __typename?: 'CredentialCount';
  destinationCalendars: Scalars['Int'];
};

export type DestinationCalendar = {
  __typename?: 'DestinationCalendar';
  _count: DestinationCalendarCount;
  booking?: Maybe<Array<Booking>>;
  credential?: Maybe<Credential>;
  credentialId?: Maybe<Scalars['Int']>;
  eventType?: Maybe<EventType>;
  eventTypeId?: Maybe<Scalars['Int']>;
  externalId: Scalars['String'];
  id: Scalars['ID'];
  integration: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type DestinationCalendarCount = {
  __typename?: 'DestinationCalendarCount';
  booking: Scalars['Int'];
};

export type Doctor = {
  __typename?: 'Doctor';
  _count: DoctorCount;
  calLink: Scalars['String'];
  calUserId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  specializations?: Maybe<Array<Specialization>>;
  specializationsIds?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  user: PulseUserId;
  userId: Scalars['String'];
};

export type DoctorCount = {
  __typename?: 'DoctorCount';
  specializations: Scalars['Int'];
};

export type DoctorCreateInput = {
  calLink?: InputMaybe<Scalars['String']>;
  calUserId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  specializations?: InputMaybe<SpecializationCreateNestedManyWithoutDoctorInput>;
  specializationsIds?: InputMaybe<DoctorCreatespecializationsIdsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutDoctorInput;
};

export type DoctorCreateNestedManyWithoutSpecializationsInput = {
  connect?: InputMaybe<Array<DoctorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DoctorCreateOrConnectWithoutSpecializationsInput>>;
  create?: InputMaybe<Array<DoctorCreateWithoutSpecializationsInput>>;
};

export type DoctorCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<DoctorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DoctorCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<DoctorCreateWithoutUserInput>;
};

export type DoctorCreateOrConnectWithoutSpecializationsInput = {
  create: DoctorCreateWithoutSpecializationsInput;
  where: DoctorWhereUniqueInput;
};

export type DoctorCreateOrConnectWithoutUserInput = {
  create: DoctorCreateWithoutUserInput;
  where: DoctorWhereUniqueInput;
};

export type DoctorCreateWithoutSpecializationsInput = {
  calLink?: InputMaybe<Scalars['String']>;
  calUserId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  specializationsIds?: InputMaybe<DoctorCreatespecializationsIdsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutDoctorInput;
};

export type DoctorCreateWithoutUserInput = {
  calLink?: InputMaybe<Scalars['String']>;
  calUserId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  specializations?: InputMaybe<SpecializationCreateNestedManyWithoutDoctorInput>;
  specializationsIds?: InputMaybe<DoctorCreatespecializationsIdsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DoctorCreatespecializationsIdsInput = {
  set: Array<Scalars['String']>;
};

export type DoctorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type EventType = {
  __typename?: 'EventType';
  _count: EventTypeCount;
  afterEventBuffer: Scalars['Int'];
  availability?: Maybe<Array<Availability>>;
  beforeEventBuffer: Scalars['Int'];
  bookingLimits?: Maybe<Scalars['JSON']>;
  bookings?: Maybe<Array<Booking>>;
  currency: Scalars['String'];
  customInputs?: Maybe<Array<EventTypeCustomInput>>;
  description?: Maybe<Scalars['String']>;
  destinationCalendar?: Maybe<DestinationCalendar>;
  disableGuests: Scalars['Boolean'];
  eventName?: Maybe<Scalars['String']>;
  hashedLink?: Maybe<HashedLink>;
  hidden: Scalars['Boolean'];
  hideCalendarNotes: Scalars['Boolean'];
  hosts?: Maybe<Array<Host>>;
  id: Scalars['ID'];
  length: Scalars['Int'];
  locations?: Maybe<Scalars['JSON']>;
  metadata?: Maybe<Scalars['JSON']>;
  minimumBookingNotice: Scalars['Int'];
  owner?: Maybe<User>;
  periodCountCalendarDays?: Maybe<Scalars['Boolean']>;
  periodDays?: Maybe<Scalars['Int']>;
  periodEndDate?: Maybe<Scalars['DateTime']>;
  periodStartDate?: Maybe<Scalars['DateTime']>;
  periodType: PeriodType;
  position: Scalars['Int'];
  price: Scalars['Int'];
  recurringEvent?: Maybe<Scalars['JSON']>;
  requiresConfirmation: Scalars['Boolean'];
  schedule?: Maybe<Schedule>;
  scheduleId?: Maybe<Scalars['Int']>;
  schedulingType?: Maybe<SchedulingType>;
  seatsPerTimeSlot?: Maybe<Scalars['Int']>;
  seatsShowAttendees?: Maybe<Scalars['Boolean']>;
  slotInterval?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  successRedirectUrl?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['Int']>;
  timeZone?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<User>>;
  webhooks?: Maybe<Array<Webhook>>;
  workflows?: Maybe<Array<WorkflowsOnEventTypes>>;
};

export type EventTypeCount = {
  __typename?: 'EventTypeCount';
  availability: Scalars['Int'];
  bookings: Scalars['Int'];
  customInputs: Scalars['Int'];
  hosts: Scalars['Int'];
  users: Scalars['Int'];
  webhooks: Scalars['Int'];
  workflows: Scalars['Int'];
};

export type EventTypeCustomInput = {
  __typename?: 'EventTypeCustomInput';
  eventType: EventType;
  eventTypeId: Scalars['Int'];
  id: Scalars['ID'];
  label: Scalars['String'];
  options?: Maybe<Scalars['JSON']>;
  placeholder: Scalars['String'];
  required: Scalars['Boolean'];
  type: EventTypeCustomInputType;
};

export enum EventTypeCustomInputType {
  Bool = 'BOOL',
  Number = 'NUMBER',
  Phone = 'PHONE',
  Radio = 'RADIO',
  Text = 'TEXT',
  Textlong = 'TEXTLONG'
}

export type Feedback = {
  __typename?: 'Feedback';
  comment?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  rating: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type HashedLink = {
  __typename?: 'HashedLink';
  eventType: EventType;
  eventTypeId: Scalars['Int'];
  id: Scalars['ID'];
  link: Scalars['String'];
};

export type Host = {
  __typename?: 'Host';
  eventType: EventType;
  eventTypeId: Scalars['Int'];
  id: Scalars['ID'];
  isFixed: Scalars['Boolean'];
  user: User;
  userId: Scalars['Int'];
};

export enum IdentityProvider {
  Cal = 'CAL',
  Google = 'GOOGLE',
  Saml = 'SAML'
}

export type Impersonations = {
  __typename?: 'Impersonations';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  impersonatedBy: User;
  impersonatedById: Scalars['Int'];
  impersonatedUser: User;
  impersonatedUserId: Scalars['Int'];
};

export type LoginInput = {
  password: Scalars['String'];
  uniqueName: Scalars['String'];
};

export type Membership = {
  __typename?: 'Membership';
  accepted: Scalars['Boolean'];
  disableImpersonation: Scalars['Boolean'];
  role: MembershipRole;
  team: Team;
  teamId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export enum MembershipRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: PulseUserId;
  creaeteSpec: Specialization;
  createAppointment: Appointment;
  createBooking: Booking;
  createBookingByUserId: Booking;
  createDoctor: Doctor;
  login: Auth;
  loginBySms: Scalars['Boolean'];
  loginVerify: Auth;
  refreshToken: Token;
  signup: Scalars['Boolean'];
  updateUser: PulseUserId;
  verifyCode: Auth;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreaeteSpecArgs = {
  data: SpecializationCreateInput;
};


export type MutationCreateAppointmentArgs = {
  create: AppointmentCreateInput;
};


export type MutationCreateBookingArgs = {
  calUserId: Scalars['Float'];
  eventTypeId: Scalars['Float'];
  startTime: Scalars['DateTime'];
};


export type MutationCreateBookingByUserIdArgs = {
  calUserId: Scalars['Float'];
  eventTypeId: Scalars['Float'];
  startTime: Scalars['DateTime'];
  userId: Scalars['String'];
};


export type MutationCreateDoctorArgs = {
  doctor: DoctorCreateInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationLoginBySmsArgs = {
  data: PhoneLoginInput;
};


export type MutationLoginVerifyArgs = {
  data: PhoneCodeInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationVerifyCodeArgs = {
  code: Scalars['String'];
  data: SignupInput;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  booking?: Maybe<Booking>;
  bookingId: Scalars['Int'];
  currency: Scalars['String'];
  data: Scalars['JSON'];
  externalId: Scalars['String'];
  fee: Scalars['Int'];
  id: Scalars['ID'];
  refunded: Scalars['Boolean'];
  success: Scalars['Boolean'];
  type: PaymentType;
  uid: Scalars['String'];
};

export enum PaymentType {
  Stripe = 'STRIPE'
}

export enum PeriodType {
  Range = 'RANGE',
  Rolling = 'ROLLING',
  Unlimited = 'UNLIMITED'
}

export type PhoneCodeInput = {
  code: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type PhoneLoginInput = {
  phoneNumber: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  appointments: Array<Appointment>;
  bookingsByUser: Array<Booking>;
  getDoctors: Array<Doctor>;
  getEventTypeFull: Array<EventType>;
  getSchedule: Array<Schedule>;
  getUser: PulseUserId;
  me: PulseUserId;
};


export type QueryBookingsByUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetEventTypeFullArgs = {
  calUserId: Scalars['Float'];
};


export type QueryGetScheduleArgs = {
  calUserId: Scalars['Float'];
};

export enum Role {
  Admin = 'ADMIN',
  Doctor = 'DOCTOR',
  Laboratory = 'LABORATORY',
  Patient = 'PATIENT',
  User = 'USER'
}

export type Schedule = {
  __typename?: 'Schedule';
  _count: ScheduleCount;
  availability?: Maybe<Array<Availability>>;
  eventType?: Maybe<Array<EventType>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  timeZone?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
};

export type ScheduleCount = {
  __typename?: 'ScheduleCount';
  availability: Scalars['Int'];
  eventType: Scalars['Int'];
};

export enum SchedulingType {
  Collective = 'COLLECTIVE',
  RoundRobin = 'ROUND_ROBIN'
}

export type SelectedCalendar = {
  __typename?: 'SelectedCalendar';
  externalId: Scalars['String'];
  integration: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTime'];
  id: Scalars['ID'];
  sessionToken: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type SignupInput = {
  address: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  uniqueName: Scalars['String'];
};

export type Specialization = {
  __typename?: 'Specialization';
  Doctor?: Maybe<Array<Doctor>>;
  _count: SpecializationCount;
  description: Scalars['String'];
  doctorIds?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SpecializationCount = {
  __typename?: 'SpecializationCount';
  Doctor: Scalars['Int'];
};

export type SpecializationCreateInput = {
  Doctor?: InputMaybe<DoctorCreateNestedManyWithoutSpecializationsInput>;
  description: Scalars['String'];
  doctorIds?: InputMaybe<SpecializationCreatedoctorIdsInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SpecializationCreateNestedManyWithoutDoctorInput = {
  connect?: InputMaybe<Array<SpecializationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SpecializationCreateOrConnectWithoutDoctorInput>>;
  create?: InputMaybe<Array<SpecializationCreateWithoutDoctorInput>>;
};

export type SpecializationCreateOrConnectWithoutDoctorInput = {
  create: SpecializationCreateWithoutDoctorInput;
  where: SpecializationWhereUniqueInput;
};

export type SpecializationCreateWithoutDoctorInput = {
  description: Scalars['String'];
  doctorIds?: InputMaybe<SpecializationCreatedoctorIdsInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SpecializationCreatedoctorIdsInput = {
  set: Array<Scalars['String']>;
};

export type SpecializationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  _count: TeamCount;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  eventTypes?: Maybe<Array<EventType>>;
  hideBookATeamMember: Scalars['Boolean'];
  hideBranding: Scalars['Boolean'];
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Membership>>;
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type TeamCount = {
  __typename?: 'TeamCount';
  eventTypes: Scalars['Int'];
  members: Scalars['Int'];
};

export enum TimeUnit {
  Day = 'DAY',
  Hour = 'HOUR',
  Minute = 'MINUTE'
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
  Feedback?: Maybe<Array<Feedback>>;
  _count: CalUserCount;
  accounts?: Maybe<Array<Account>>;
  allowDynamicBooking?: Maybe<Scalars['Boolean']>;
  apiKeys?: Maybe<Array<ApiKey>>;
  availability?: Maybe<Array<Availability>>;
  avatar?: Maybe<Scalars['String']>;
  away: Scalars['Boolean'];
  bio?: Maybe<Scalars['String']>;
  bookings?: Maybe<Array<Booking>>;
  brandColor: Scalars['String'];
  bufferTime: Scalars['Int'];
  completedOnboarding: Scalars['Boolean'];
  createdDate: Scalars['DateTime'];
  credentials?: Maybe<Array<Credential>>;
  darkBrandColor: Scalars['String'];
  defaultScheduleId?: Maybe<Scalars['Int']>;
  destinationCalendar?: Maybe<DestinationCalendar>;
  disableImpersonation: Scalars['Boolean'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  endTime: Scalars['Int'];
  eventTypes?: Maybe<Array<EventType>>;
  hideBranding: Scalars['Boolean'];
  hosts?: Maybe<Array<Host>>;
  id: Scalars['ID'];
  identityProvider: IdentityProvider;
  identityProviderId?: Maybe<Scalars['String']>;
  impersonatedBy?: Maybe<Array<Impersonations>>;
  impersonatedUsers?: Maybe<Array<Impersonations>>;
  invitedTo?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  ownedEventTypes?: Maybe<Array<EventType>>;
  password?: Maybe<Scalars['String']>;
  role: UserPermissionRole;
  routingForms?: Maybe<Array<App_RoutingForms_Form>>;
  schedules?: Maybe<Array<Schedule>>;
  selectedCalendars?: Maybe<Array<SelectedCalendar>>;
  sessions?: Maybe<Array<Session>>;
  startTime: Scalars['Int'];
  teams?: Maybe<Array<Membership>>;
  theme?: Maybe<Scalars['String']>;
  timeFormat?: Maybe<Scalars['Int']>;
  timeZone: Scalars['String'];
  trialEndsAt?: Maybe<Scalars['DateTime']>;
  twoFactorEnabled: Scalars['Boolean'];
  twoFactorSecret?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  verifiedNumbers?: Maybe<Array<VerifiedNumber>>;
  webhooks?: Maybe<Array<Webhook>>;
  weekStart: Scalars['String'];
  workflows?: Maybe<Array<Workflow>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  appointmentsAsAuthor: Scalars['Int'];
  appointmentsAsPatient: Scalars['Int'];
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

export type UserCreateNestedOneWithoutDoctorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDoctorInput>;
  create?: InputMaybe<UserCreateWithoutDoctorInput>;
};

export type UserCreateOrConnectWithoutAppointmentsAsAuthorInput = {
  create: UserCreateWithoutAppointmentsAsAuthorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAppointmentsAsPatientInput = {
  create: UserCreateWithoutAppointmentsAsPatientInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutDoctorInput = {
  create: UserCreateWithoutDoctorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAppointmentsAsAuthorInput = {
  address: Scalars['String'];
  appointmentsAsPatient?: InputMaybe<AppointmentCreateNestedManyWithoutPatientInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  doctor?: InputMaybe<DoctorCreateNestedOneWithoutUserInput>;
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
  address: Scalars['String'];
  appointmentsAsAuthor?: InputMaybe<AppointmentCreateNestedManyWithoutAuthorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  doctor?: InputMaybe<DoctorCreateNestedOneWithoutUserInput>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  role?: InputMaybe<Role>;
  uniqueName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutDoctorInput = {
  address: Scalars['String'];
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

export enum UserPermissionRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  uniqueName?: InputMaybe<Scalars['String']>;
};

export type VerifiedNumber = {
  __typename?: 'VerifiedNumber';
  id: Scalars['ID'];
  phoneNumber: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type Webhook = {
  __typename?: 'Webhook';
  active: Scalars['Boolean'];
  app?: Maybe<App>;
  appId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  eventTriggers?: Maybe<Array<WebhookTriggerEvents>>;
  eventType?: Maybe<EventType>;
  eventTypeId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  payloadTemplate?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  subscriberUrl: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export enum WebhookTriggerEvents {
  BookingCancelled = 'BOOKING_CANCELLED',
  BookingCreated = 'BOOKING_CREATED',
  BookingRescheduled = 'BOOKING_RESCHEDULED',
  FormSubmitted = 'FORM_SUBMITTED',
  MeetingEnded = 'MEETING_ENDED'
}

export type Workflow = {
  __typename?: 'Workflow';
  _count: WorkflowCount;
  activeOn?: Maybe<Array<WorkflowsOnEventTypes>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  steps?: Maybe<Array<WorkflowStep>>;
  time?: Maybe<Scalars['Int']>;
  timeUnit?: Maybe<TimeUnit>;
  trigger: WorkflowTriggerEvents;
  user: User;
  userId: Scalars['Int'];
};

export enum WorkflowActions {
  EmailAddress = 'EMAIL_ADDRESS',
  EmailAttendee = 'EMAIL_ATTENDEE',
  EmailHost = 'EMAIL_HOST',
  SmsAttendee = 'SMS_ATTENDEE',
  SmsNumber = 'SMS_NUMBER'
}

export type WorkflowCount = {
  __typename?: 'WorkflowCount';
  activeOn: Scalars['Int'];
  steps: Scalars['Int'];
};

export enum WorkflowMethods {
  Email = 'EMAIL',
  Sms = 'SMS'
}

export type WorkflowReminder = {
  __typename?: 'WorkflowReminder';
  booking?: Maybe<Booking>;
  bookingUid: Scalars['String'];
  id: Scalars['ID'];
  method: WorkflowMethods;
  referenceId?: Maybe<Scalars['String']>;
  scheduled: Scalars['Boolean'];
  scheduledDate: Scalars['DateTime'];
  workflowStep: WorkflowStep;
  workflowStepId: Scalars['Int'];
};

export type WorkflowStep = {
  __typename?: 'WorkflowStep';
  _count: WorkflowStepCount;
  action: WorkflowActions;
  emailSubject?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  numberRequired?: Maybe<Scalars['Boolean']>;
  numberVerificationPending: Scalars['Boolean'];
  reminderBody?: Maybe<Scalars['String']>;
  sendTo?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  stepNumber: Scalars['Int'];
  template: WorkflowTemplates;
  workflow: Workflow;
  workflowId: Scalars['Int'];
  workflowReminders?: Maybe<Array<WorkflowReminder>>;
};

export type WorkflowStepCount = {
  __typename?: 'WorkflowStepCount';
  workflowReminders: Scalars['Int'];
};

export enum WorkflowTemplates {
  Custom = 'CUSTOM',
  Reminder = 'REMINDER'
}

export enum WorkflowTriggerEvents {
  AfterEvent = 'AFTER_EVENT',
  BeforeEvent = 'BEFORE_EVENT',
  EventCancelled = 'EVENT_CANCELLED',
  NewEvent = 'NEW_EVENT',
  RescheduleEvent = 'RESCHEDULE_EVENT'
}

export type WorkflowsOnEventTypes = {
  __typename?: 'WorkflowsOnEventTypes';
  eventType: EventType;
  eventTypeId: Scalars['Int'];
  id: Scalars['ID'];
  workflow: Workflow;
  workflowId: Scalars['Int'];
};

export type CalUserCount = {
  __typename?: 'calUserCount';
  Feedback: Scalars['Int'];
  accounts: Scalars['Int'];
  apiKeys: Scalars['Int'];
  availability: Scalars['Int'];
  bookings: Scalars['Int'];
  credentials: Scalars['Int'];
  eventTypes: Scalars['Int'];
  hosts: Scalars['Int'];
  impersonatedBy: Scalars['Int'];
  impersonatedUsers: Scalars['Int'];
  ownedEventTypes: Scalars['Int'];
  routingForms: Scalars['Int'];
  schedules: Scalars['Int'];
  selectedCalendars: Scalars['Int'];
  sessions: Scalars['Int'];
  teams: Scalars['Int'];
  verifiedNumbers: Scalars['Int'];
  webhooks: Scalars['Int'];
  workflows: Scalars['Int'];
};

export type PulseUserId = {
  __typename?: 'pulseUserId';
  _count: UserCount;
  address: Scalars['String'];
  appointmentsAsAuthor?: Maybe<Array<Appointment>>;
  appointmentsAsPatient?: Maybe<Array<Appointment>>;
  createdAt: Scalars['DateTime'];
  doctor?: Maybe<Doctor>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  role: Role;
  uniqueName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Get_Bookings_By_User_IdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type Get_Bookings_By_User_IdQuery = { __typename?: 'Query', bookingsByUser: Array<{ __typename?: 'Booking', id: string, uid: string, description?: string | null, title: string, startTime: any, endTime: any, user?: { __typename?: 'User', name?: string | null, bio?: string | null, email: string } | null }> };


export const Get_Bookings_By_User_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_BOOKINGS_BY_USER_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookingsByUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}}]}}]} as unknown as DocumentNode<Get_Bookings_By_User_IdQuery, Get_Bookings_By_User_IdQueryVariables>;