# Steps to Build This Project From Scratch

This guide explains how to create the Ynov Fullstack Project from zero, including all backend services and the frontend, using modern tools and best practices.

---

## 1. Install Prerequisites

- **[Node.js](https://nodejs.org/)** (v16+ recommended)
- **[npm](https://www.npmjs.com/)** (comes with Node.js)
- **[Docker](https://www.docker.com/)** and **[docker-compose](https://docs.docker.com/compose/)**

---

## 2. Initialize the Project Structure

```bash
mkdir mon-projet-fullstack
cd mon-projet-fullstack
```

---

## 3. Create Backend Services (Express APIs)

Repeat these steps for each service: `api-gateway`, `user-service`, `cv-service`.

### a. Scaffold a Service

```bash
mkdir api-gateway
cd api-gateway
npm init -y
npm install express
```

### b. Add TypeScript (optional but recommended)

```bash
npm install --save-dev typescript ts-node @types/node @types/express
npx tsc --init
```

### c. Create Basic Server

Create `src/server.ts`:

```ts
import express from "express";
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello from API Gateway!"));
app.listen(port, () => console.log(`Server running on port ${port}`));
```

### d. Add Nodemon for Development

```bash
npm install --save-dev nodemon
```

Add to `package.json` scripts:

```json
"dev": "nodemon src/server.ts"
```

### e. Repeat for `user-service` and `cv-service`

Change the port and greeting message for each service.

---

## 4. Add Docker Support

Create a `Dockerfile` in each service:

```Dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
```

Create a `docker-compose.yml` for each service, and add a PostgreSQL service for those that need a database.

---

## 5. Create the Frontend (React App)

From the root directory:

```bash
npx create-react-app front-app
cd front-app
npm start
```

---

## 6. Add UI Libraries and Tools (Frontend)

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion tailwindcss axios
npx tailwindcss init
```

---

## 7. Add Linting, Formatting, and Dev Tools

For each service and the frontend:

```bash
npm install --save-dev eslint prettier
npx eslint --init
```

---

## 8. Set Up Environment Variables

For each backend service, use [dotenv](https://www.npmjs.com/package/dotenv):

```bash
npm install dotenv
```

Create a `.env` file in each service with the required variables.

---

## 9. Initialize Git (Optional)

```bash
git init
git add .
git commit -m "Initial commit"
```

---

## 10. Continue Development

### a. api-gateway

For detailed setup instructions for the API Gateway, see [api-gateway/SETUP.md](../api-gateway/SETUP.md).

> **⚠️ Disclaimer:**  
> The API Gateway in this project uses the [`http-proxy-middleware`](https://www.npmjs.com/package/http-proxy-middleware) Node module for request proxying.  
> **This setup is intended for learning and experimentation only.**  
> **Do _not_ use this proxy approach as-is in production environments.**  
> For production, consider robust solutions like [NGINX](https://www.nginx.com/), [Traefik](https://traefik.io/), or a dedicated API Gateway service.

### b. user-service

_(or any other service that is a REST API with a database)_
For detailed setup for the REST API User, see [user-service/SETUP.md](../user-service/SETUP.md).

## Notes

- This guide is a high-level overview. Adjust steps as needed for your stack and requirements.
- For more details, see the main `README.md`.
