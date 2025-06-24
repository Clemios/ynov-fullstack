import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import { setupLogging } from './logging';
import userRoutes from './routes/user';
import authRoutes from './routes/auth';

import { swaggerSpec } from './config/swagger';

const app: Express = express();
const router = app.router;
const port = process.env.PORT || 9000;

setupLogging(app);

app.use(cors());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('/test of API of USER Service');
});

// Swagger UI
router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerSpec));

router.use('/', userRoutes);
router.use('/auth', authRoutes);

app.listen(9000, '0.0.0.0', () => {
  console.log(`Running on http://0.0.0.0:${port}`);
});
