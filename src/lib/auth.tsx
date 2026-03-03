import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router';
import { z } from 'zod';

import { api } from './api-client';
import { paths } from '../app/config/paths';
import { AuthResponse, UserType } from '../types/auth';

export const STORAGE_USER_KEY = 'auth_user';
export const STORAGE_TOKEN_KEY = 'auth_token';

// Get user from localStorage
const getUser = async (): Promise<UserType | null> => {
  const storedUser = localStorage.getItem(STORAGE_USER_KEY);
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return null;
};

// Logout - clear localStorage
const logout = async (): Promise<void> => {
  localStorage.removeItem(STORAGE_USER_KEY);
  localStorage.removeItem(STORAGE_TOKEN_KEY);
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Field Required').email('Invalid Format'),
  password: z.string().min(1, 'Field Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

export const employerRegisterSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password is too long'),
  role: z.enum(['HM', 'TA'], {
    required_error: 'Please select a role',
  }),
});

export const candidateRegisterSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password is too long'),
});

const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post('/auth/login', data);
};

export const registerInputSchema = z.object({
  email: z.string().min(1, 'Field Required').email('Invalid Format'),
  firstName: z.string().min(1, 'Field Required'),
  lastName: z.string().min(1, 'Field Required'),
  password: z.string().min(5, 'Required'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    return response.user;
  },
  registerFn: async (_data: RegisterInput) => {
    throw new Error('Registration is not supported');
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

// CandidateRoute: Only allows candidates or non-logged-in users
export const CandidateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();

  // If user is logged in but NOT a candidate, redirect to their appropriate dashboard
  // if (user.data && user.data.role !== 'candidate') {
  //   // Redirect to portal or HM dashboard based on role
  //   const redirectPath =
  //     user.data.role === 'HM'
  //       ? paths.app.hiringManagers.dashboard.getHref()
  //       : paths.app.talentRecruitment.dashboard.getHref();

  //   return <Navigate to={redirectPath} replace />;
  // }

  // Allow access for candidates and non-logged-in users
  return children;
};
