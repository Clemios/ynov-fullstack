import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log('Authorization header:', authHeader);
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing bearer header token' });
  }

  const token = authHeader?.split(' ')[1] || '';

  try {
    const decoded = verifyToken(token);
    console.log('Decoded token:', decoded);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
