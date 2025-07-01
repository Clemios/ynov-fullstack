# Ynov Fullstack Project

This project is a fullstack learning environment, designed to help you understand and practice modern web development with a microservices architecture. It consists of several backend services (API Gateway, User Service, CV Service) and a frontend React application.

---

## Project Structure

- **api-gateway/**: Entry point for backend requests, proxies and routes traffic to the appropriate services.
- **user-service/**: Manages user authentication, registration, and user data.
- **cv-service/**: Handles CV-related data and operations.
- **front-app/**: React-based frontend for user interaction.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) (for backend services)

---

## Installation

You need to install dependencies for each service and the frontend. In your terminal, run the following commands:

```bash
cd api-gateway
npm install

cd ../user-service
npm install

cd ../cv-service
npm install

cd ../front-app
npm install
```

---

## Running the Project

### Backend Services

The backend is composed of three services: `api-gateway`, `user-service`, and `cv-service`. Each service can be started using Docker Compose.

From each backend service directory (`api-gateway`, `user-service`, `cv-service`), run:

```bash
docker-compose up
```

This will build and start the services using the configuration in each `docker-compose.yml`.

#### Development Mode

If you want to run the services in development mode (with hot-reloading), you can use:

```bash
npm run dev
```

Or, for TypeScript live compilation and auto-restart:

```bash
npm run serve
```

### Frontend

The frontend is a React application located in `front-app/`. To start the development server:

```bash
cd front-app
npm start
```

This will launch the app at [http://localhost:3000](http://localhost:3000) by default.

---

## Scripts Overview

### Common Scripts (Backend)

- `npm run build`: Compiles TypeScript to JavaScript.
- `npm start`: Runs the compiled server.
- `npm run dev`: Starts the server with `nodemon` for hot-reloading.
- `npm run serve`: Runs TypeScript in watch mode and restarts server on changes.
- `npm run lint` (user-service): Lints and auto-fixes code.

### Frontend Scripts

- `npm start`: Starts the React development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs tests using Jest and React Testing Library.

---

## Technologies Used

### Backend

- **Node.js** with **Express.js**
- **TypeScript**
- **Docker** & **docker-compose**
- **PostgreSQL** (user-service)
- **Swagger** (user-service, for API documentation)
- **JWT** (user authentication)
- **Bcrypt** (password hashing)
- **Morgan** (logging)
- **dotenv** (environment variables)
- **Nodemon**, **ts-node**, **rimraf**, **concurrently** (development tools)
- **ESLint**, **Prettier** (code quality)

### Frontend

- **React** (v19)
- **Chakra UI** (component library)
- **Tailwind CSS** (utility-first CSS)
- **Axios** (HTTP client)
- **Jest** & **React Testing Library** (testing)
- **Webpack** (bundling)
- **Emotion** (CSS-in-JS)
- **Framer Motion** (animations)
- **Next Themes** (theme management)

---

## Environment Variables

Each backend service uses `dotenv` to manage environment variables. Create a `.env` file in each service directory as needed (see each service's documentation or code for required variables).

---

## Author

Clément Fleury

---

## License

MIT
