# API Gateway Setup

The API Gateway acts as a single entry point for your microservices, handling routing, logging, authentication, and proxying requests to the appropriate backend services. This approach is inspired by [this Medium article](https://medium.com/geekculture/create-an-api-gateway-using-nodejs-and-express-933d1ca23322).

---

## 1. Install Required Dependencies

In the `api-gateway` directory, install the following packages:

```bash
npm install express http-proxy-middleware morgan
npm install --save-dev @types/express @types/morgan
```

- `express`: Web framework.
- `http-proxy-middleware`: For proxying requests to microservices.
- `morgan`: HTTP request logger middleware.

---

## 2. Organize the Codebase

Structure your `src/` directory as follows:

```
src/
  logging.ts         # Sets up request logging
  proxy.ts           # Configures proxy rules for microservices
  routes/routes.ts   # Defines route configurations (auth, rateLimit, etc.)
  server.ts          # Main entry point
```

---

## 3. Configure Logging

Create `src/logging.ts` to set up request logging using Morgan:

```ts
import morgan from "morgan";
import { Express } from "express";

export function setupLogging(app: Express) {
  app.use(morgan("combined"));
}
```

---

## 4. Define Route Configurations

In `src/routes/routes.ts`, define the routes and their properties (authentication, rate limiting, proxy target, etc.).  
**Note:** The `rateLimit` property is only for documentation or future use; it is not enforced by any middleware.

```ts
export const ROUTES = [
  {
    url: "/users",
    auth: true,
    rateLimit: { windowMs: 15 * 60 * 1000, max: 100 }, // Not enforced, just for config
    proxy: {
      target: "http://localhost:5001", // user-service
      changeOrigin: true,
      pathRewrite: { "^/users": "" },
    },
  },
  {
    url: "/cv",
    auth: true,
    proxy: {
      target: "http://localhost:5002", // cv-service
      changeOrigin: true,
      pathRewrite: { "^/cv": "" },
    },
  },
  // Add more routes as needed
];
```

---

## 5. Set Up Proxy Middleware

In `src/proxy.ts`, use `http-proxy-middleware` to forward requests.  
**No rate limiting middleware is used.**

```ts
import { Express } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { ROUTES } from "./routes/routes";

export function setupProxies(app: Express) {
  ROUTES.forEach((route) => {
    // You can add authentication middleware here if needed: if (route.auth) { ... }
    app.use(route.url, createProxyMiddleware(route.proxy));
  });
}
```

---

## 6. Compose Everything in `server.ts`

Your `src/server.ts` should import and use all the setup functions:

```ts
import express from "express";
import { setupLogging } from "./logging";
import { setupProxies } from "./proxy";

const app = express();
const port = process.env.PORT || 5000;

setupLogging(app);
setupProxies(app);

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});
```

---

**References:**

- [Create an API Gateway Using NodeJS and Express (Medium)](https://medium.com/geekculture/create-an-api-gateway-using-nodejs-and-express-933d1ca23322)
