# Front-End Setup Guide (`front-app`)

> **Note:** This project was initialized with Create React App, but all additional tools (such as Tailwind CSS, Chakra UI, and custom configurations) were installed and set up manually. The default CRA scripts and configuration have been replaced or extended to fit the project's needs.

### 1. Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (v8+ recommended) or **yarn**

Check your versions:

```sh
node -v
npm -v
```

---

### 2. Install Dependencies

From the `front-app` directory, run:

```sh
npm install
# or
yarn install
```

---

### 3. Environment Variables

If your app uses environment variables, copy the example file and edit as needed:

```sh
cp .env.example .env
# Edit .env to match your local setup
```

> _If there is no `.env.example`, check `config/env.js` for environment variable usage._

---

### 4. Start the Development Server

```sh
npm start
# or
yarn start
```

- The app will run at [http://localhost:3000](http://localhost:3000) by default.

---

### 5. Build for Production

```sh
npm run build
# or
yarn build
```

- Output will be in the `build/` directory.

---

### 6. Run Tests

```sh
npm test
# or
yarn test
```

---

### 7. Linting & Formatting

If you use ESLint or Prettier:

```sh
npm run lint
npm run format
```

> _Check `package.json` scripts for available commands._

---

### 8. Tailwind CSS

- Tailwind is configured via `tailwind.config.js`.
- Styles are imported in `src/index.css`.

---

### 9. Chakra UI

- Chakra UI components are used in `src/components/`.
- Custom theme: see `src/helpers/chakraTheme.js`.

---

### 10. Project Structure

- `src/components/`: UI components (atoms, molecules, organisms)
- `src/containers/`: Page-level components
- `src/api/`: API calls
- `src/hooks/`: Custom React hooks
- `src/helpers/`: Utility functions

---

### 11. Useful Scripts

Check all available scripts:

```sh
npm run
# or
yarn run
```

---

### 12. Troubleshooting

- If you see errors about missing modules, re-run `npm install`.
- For port conflicts, change the port in `.env` or use `PORT=xxxx npm start`.

---

### 13. Ejecting Create React App

This project has been **ejected** from Create React App.

**What does "eject" mean?**

- Ejecting copies all the configuration files and dependencies (Webpack, Babel, ESLint, etc.) into your project so you have full control over them.
- You can now directly edit configuration files in the `config/` directory and scripts in the `scripts/` directory.

**Why eject?**

- To customize the build process, Webpack, Babel, or other configurations beyond what Create React App allows out of the box.

**Important notes:**

- **Ejecting is irreversible.** Once you eject, you cannot go back!
- All configuration is now your responsibility to maintain and update.

---

## Additional Notes

- This project was originally created with [Create React App](https://create-react-app.dev/), but all further setup (styling, UI libraries, build configuration, etc.) was done manually for full control and customization.
