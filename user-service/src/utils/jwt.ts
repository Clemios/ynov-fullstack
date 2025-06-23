import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'supersecret';

export const signToken = (payload: object, expiresIn = '1h') => {
  return jwt.sign(payload, SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
};
