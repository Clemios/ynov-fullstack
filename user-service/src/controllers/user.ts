import { Request, Response } from 'express';
import * as userService from '../services/user';

export const getUsers = (req: Request, res: Response) => {
  res.json(userService.getAllUsers());
};

export const getUser = (req: Request, res: Response) => {
  const user = userService.getUserById(req.params.id);
  if (!user) res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = userService.createUser({ name, email });
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response) => {
  const updated = userService.updateUser(req.params.id, req.body);
  if (!updated) res.status(404).json({ message: 'User not found' });
  res.json(updated);
};

export const deleteUser = (req: Request, res: Response) => {
  const success = userService.deleteUser(req.params.id);
  if (!success) res.status(404).json({ message: 'User not found' });
  res.status(204).send();
};
