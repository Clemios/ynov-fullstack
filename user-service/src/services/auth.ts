import { signToken } from '../utils/jwt.js';
import bcrypt from 'bcrypt';

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
  const existing = users.find((u) => u.email === email);
  if (existing) return null;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: NewUser = {
    name,
    email,
    password: hashedPassword
  };
  console.log('New user payload:', newUser);

  const token = signToken({ name, email });
  return { token, user: { name, email } };
};

export const login = async (email: string, password: string) => {
  const user = users.find((u) => u.email === email);
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;

  const token = signToken({ id: user.id, email });
  return { token, user: { id: user.id, name: user.name, email } };
};
