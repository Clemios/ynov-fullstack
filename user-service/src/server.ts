// server.ts - Entry point for the User Service API
// This file sets up the Express server, middleware, routes, and Swagger documentation.
// It is the main file that starts the API and ties all components together.

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import { setupLogging } from './logging';
import userRoutes from './routes/user';
import authRoutes from './routes/auth';

import { swaggerSpec } from './config/swagger';

const app: Express = express();
const router = app.router; // Router instance for mounting routes
const port = process.env.PORT || 9000; // Port configuration

setupLogging(app); // Set up logging middleware

// Enable CORS for all requests
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// Log every incoming request (method and URL)
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

// Global error handler middleware
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Simple test endpoint to verify the API is running
app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('/test of API of USER Service');
});

// Swagger UI setup for API documentation
router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerSpec));

// Mount user-related routes at root
router.use('/', userRoutes);
// Mount authentication-related routes at /auth
router.use('/auth', authRoutes);

// Start the server and listen on the specified port
app.listen(9000, '0.0.0.0', () => {
  console.log(`Running on http://0.0.0.0:${port}`);
});
