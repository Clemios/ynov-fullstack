import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, NextFunction } from "express";
// import httpProxy from "http-proxy";
import cors from "cors";
import { setupLogging } from './logging';

const app: Express = express();
const port = process.env.PORT || 6000;
// const apiProxy = httpProxy.createProxyServer();
setupLogging(app);

app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('/ of API of CV Service');
})

// app.get(url ,() => {})

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); 
  res.status(500).send('Something broke!'); 
});

app.listen(port, () => {
    console.log(`Service CV is running at http://localhost:${port}`);
});