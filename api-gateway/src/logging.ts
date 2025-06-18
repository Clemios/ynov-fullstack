import { Application } from 'express';
import morgan from 'morgan';

const setupLogging = (app: Application) => {
    app.use(morgan('combined'));
}

export { setupLogging };