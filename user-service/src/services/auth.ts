import { signToken } from '../utils/jwt';
import { v4 as uuid } from 'uuid';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const users: User[] = [];

export const signup = ({ name, email, password }: Omit<User, 'id'>) => {
  const existing = users.find((u) => u.email === email);
  if (existing) return null;

  const newUser: User = { id: uuid(), name, email, password };
  users.push(newUser);
  const token = signToken({ id: newUser.id, email });
  return { token, user: { id: newUser.id, name, email } };
};

export const login = (email: string, password: string) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return null;

  const token = signToken({ id: user.id, email });
  return { token, user: { id: user.id, name: user.name, email } };
};
