import { Entity } from './api';

export enum UserRole {
  TALENT_ACQUISITION = 'TA',
  HIRING_MANAGERS = 'HM',
  CANDIDATE = 'candidate',
}

export type UserType = Entity<{
  name: string;
  email: string;
  role: UserRole;
}>;

export type AuthResponse = {
  jwt: string;
  user: UserType;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type UserLoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: 'HM' | 'TA'; // HM = Hiring Manager, TA = Talent Acquisition
    createdAt: string;
    updatedAt: string;
  };
};

export type CandidateLoginResponse = {
  token: string;
  candidate: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
};
