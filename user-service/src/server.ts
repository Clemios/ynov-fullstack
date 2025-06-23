import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { setupLogging } from './logging';
import userRoutes from './routes/user';

const app: Express = express();
const router = express.Router();
const port = process.env.PORT || 9000;

setupLogging(app);

app.use(cors());

// generateRoutes(app);

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('/ of API of USER Service');
});

router.use('/', userRoutes);

// app.get(url ,() => {})

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(9000, '0.0.0.0', () => {
  console.log(`Running on http://0.0.0.0:${port}`);
});
