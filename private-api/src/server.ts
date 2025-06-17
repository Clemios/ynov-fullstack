import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, NextFunction } from "express";
// import httpProxy from "http-proxy";
import cors from "cors";
import { setupProxies } from './proxy';
import { ROUTES } from './routes';

const app: Express = express();
const port = process.env.PORT || 5555;
// const apiProxy = httpProxy.createProxyServer();

app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: true,
        data: '/ of Private API',
      });
})

setupProxies(app, ROUTES);

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); 
  res.status(500).send('Something broke!'); 
});

app.listen(port, () => {
    console.log(`PrivateAPI is running at http://localhost:${port}`);
});