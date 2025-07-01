# User Service – Step-by-Step Setup Guide

## 1. Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- PostgreSQL running locally or remotely
- Docker (optional, for docker-compose usage)

---

## 2. Initialize the Project

```bash
mkdir user-service
cd user-service
npm init -y
```

---

## 3. Install Dependencies

```bash
npm install express pg dotenv jsonwebtoken bcryptjs cors
npm install --save-dev typescript ts-node nodemon @types/express @types/node @types/jsonwebtoken @types/bcryptjs @types/cors
```

---

## 4. Initialize TypeScript

```bash
npx tsc --init
```

- In `tsconfig.json`, set:
  - `"outDir": "./dist"`
  - `"rootDir": "./src"`
  - `"esModuleInterop": true`
  - `"moduleResolution": "node"`

---

## 5. Create .env File

At the root of `user-service`:

```
PGUSER=your_pg_user
PGPASSWORD=your_pg_password
PGHOST=localhost
PGPORT=5432
PGDATABASE=your_db_name
JWT_SECRET=yourSuperSecretKey
PORT=3001
```

> **Note:** Adjust values as needed for your environment. Do not commit this file.

---

## 6. Add Scripts to package.json

In your `package.json`, add:

```json
"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

---

## 7. Create Source Directory and Entry Point

```bash
mkdir src
mkdir src/routes src/controllers src/services src/middlewares src/utils src/config
# Main entry point:
touch src/server.ts
```

---

## 8. Set Up PostgreSQL Connection

Create `src/config/db.ts`:

```ts
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool();
```

---

## 9. Implement User Table (SQL Example)

Connect to your PostgreSQL and run:

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

---

## 10. Implement JWT Utility

Create `src/utils/jwt.ts`:

```ts
import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || 'defaultSecret';
export const generateToken = (payload: object) => jwt.sign(payload, secret, { expiresIn: '1h' });
export const verifyToken = (token: string) => jwt.verify(token, secret);
```

---

## 11. Implement Auth Middleware

Create `src/middlewares/auth.ts`:

```ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET || 'defaultSecret');
      next();
    } catch (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};
```

---

## 12. Implement Routes, Controllers, and Services

- Create routes for `/auth/register`, `/auth/login`, and `/users` (CRUD, protected).
- Use the `pg` pool to query the database directly (no ORM).
- Hash passwords with `bcryptjs`.
- Generate and verify JWTs for authentication.

---

## 13. Main Server File

**src/server.ts**

```ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { pool } from './config/db';
// import your routes here

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/auth', authRoutes);
// app.use('/users', userRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

---

## 14. Start the Service

```bash
npm run dev
```

---

## 15. Test the API

Use Postman, Insomnia, or Swagger UI to test endpoints. For protected routes, add:

```
Authorization: Bearer <token>
```

---

## 16. Best Practices

- Never commit your `.env` file.
- Change `JWT_SECRET` in production.
- Use HTTPS in production.

---

## 17. Resources

- [Create a REST API with Express (laConsole)](https://laconsole.dev/formations/express/creer-api-rest)
- [Secure a REST API with JWT (laConsole)](https://laconsole.dev/formations/express/securiser-api-rest-jwt)
