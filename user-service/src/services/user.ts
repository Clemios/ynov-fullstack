import { User } from '../models/user';
import { v4 as uuid } from 'uuid';

let users: User[] = [];

export const getAllUsers = (): User[] => users;

export const getUserById = (id: string): User | undefined => users.find((user) => user.id === id);

export const createUser = (user: Omit<User, 'id'>): User => {
  const newUser = { id: uuid(), ...user };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id: string, updates: Partial<User>): User | null => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...updates };
  return users[index];
};

export const deleteUser = (id: string): boolean => {
  const originalLength = users.length;
  users = users.filter((u) => u.id !== id);
  return users.length < originalLength;
};
