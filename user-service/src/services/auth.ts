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

export const signup = async ({ name, email, password }: Omit<User, 'id'>) => {
  const existingUser = await userService.getUserByEmail(email);

  if (existingUser) return null;

  const newUser: NewUser = {
    name,
    email,
    password
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
  if (!user) return null; // pas d'user avec cet email

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null; // mot de passe incorrect

  // creation JWT
  const token = signToken({ id: user.id, email });

  console.log('Generated token:', token);
  return { token, user: { id: user.id, name: user.name, email } };
};
