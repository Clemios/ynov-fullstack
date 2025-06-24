import { signToken } from '../utils/jwt';
import bcrypt from 'bcrypt';
import * as userService from './user';

interface NewUser {
  name: string;
  email: string;
  password: string;
}

interface User extends NewUser {
  id: string;
}

// Use in-memory store for now
const users: User[] = [];

export const signup = async ({ name, email, password }: Omit<User, 'id'>) => {
  const existingUser = await userService.getUserByEmail(email);
  // const existing = users.find((u) => u.email === email);
  if (existingUser) return null;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: NewUser = {
    name,
    email,
    password: hashedPassword
  };
  console.log('New user payload:', newUser);

  const createdUser = await userService.createUser(newUser);
  console.log('New user ctrated:', createdUser);
  const token = signToken({ id: createdUser.id, email: createdUser.email });

  console.log('TOKEN', token); // login to generate token
  return { token, createdUser };
};

export const login = async (email: string, password: string) => {
  // const user = users.find((u) => u.email === email);
  const user = await userService.getUserByEmail(email);
  console.log('User pass:', password);
  console.log('User found:', user);
  if (!user) return null; // pas d'unser avec cet email

  const valid = await bcrypt.compare(password, user.password);
  console.log('Password sent:', password);
  console.log('hash in db: $2b$10$DvOwE9oIUp8GU7ZDsCwxKOpgkFvg.ZYUOOYuVri0swOno2J2Tr.6i');
  // $2y$10$UjUuqOg0p0oN51pt9PatGO24obHK9INPcRt19O9PXdF14XmtFWoIu
  if (!valid) return null; // mot de passe incorrect
  console.log('Password valid:', valid);
  // creation JWT
  const token = signToken({ id: user.id, email });

  console.log('Generated token:', token);
  return { token, user: { id: user.id, name: user.name, email } };
};
