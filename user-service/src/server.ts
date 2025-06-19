import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, NextFunction } from "express";
// import httpProxy from "http-proxy";
import cors from "cors";
import { setupLogging } from './logging';
import { generateRoutes } from './routes/serveRoutes';

const app: Express = express();
const port = process.env.PORT || 9000;
// const apiProxy = httpProxy.createProxyServer();
setupLogging(app);


app.use(cors());

// generateRoutes(app);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('/ of API of USER Service');
})

// app.get(url ,() => {})

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); 
  res.status(500).send('Something broke!'); 
});

app.listen(9000, '0.0.0.0', () => {
  console.log(`Running on http://0.0.0.0:${port}`);
});