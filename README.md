# ReactJS Base Source Code

## Clean Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # Basic UI components
│   ├── layout/          # Layout components
│   ├── forms/           # Form components
│   └── common/          # Common components
├── pages/               # Page components
├── hooks/               # Custom hooks
├── services/            # API services
├── utils/               # Utility functions
├── constants/           # App constants
├── types/               # TypeScript types
├── stores/              # State management
├── assets/              # Static assets
└── styles/              # Global styles
```

---

## Config & Setup

- **Prettier & ESLint:** Code style enforced by `.prettierrc`, `.eslintrc.js`, `.editorconfig`
- **Path Aliases:** Configured in `tsconfig.json` and `vite.config.ts`
- **TailwindCSS:** Rapid utility-first styling. Config in `tailwind.config.js`
- **SCSS Support:** Use `.scss` files for custom styles and variables
- **Redux Toolkit:** State management in `src/stores/`
- **React Router:** Routing system and lazy-loading page components
- **Environment Variables:** All envs must use the `VITE_` prefix

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## Environment Variables

Add your variables in `.env`, `.env.development`, `.env.production`, etc.

Example:

```
VITE_API_URL=https://api.example.com
VITE_FEATURE_FLAG_EXPERIMENTAL=true
```

> **All env variables used in code must start with `VITE_`.**

---

## Validate Environment Variables

The project uses [zod](https://zod.dev/) to validate required environment variables at startup.  
Validation schema is in `src/constants/env.ts`.  
If a variable is missing or has the wrong format, the app will throw an error and stop.

---

## Base Components & Utilities

- **UI Components:** Button, Input, Modal, Toast, Spinner, Table, etc.
- **Layout:** Header, Sidebar, Container, Grid, ...
- **Hooks:** `useApi`, `useLocalStorage`, `useDebounce`, `useForm`, ...
- **API Service Layer:** Axios instance with interceptors, error handling, request cancel, etc.
- **Auth:** JWT management, protected route, session, logout
- **Testing:** Pre-configured Jest + React Testing Library (see upcoming docs)

---

## Documentation

- **Component docs:** _Coming soon with Storybook integration_
- **API docs:** _Coming soon_
- **Contributing:** PRs welcome! Please follow the code style and structure guidelines.

---

## Tips

- Use absolute imports with aliases:  
  `import Button from '@components/ui/Button';`
- Global styles: `src/styles/global.scss`
- Utility functions: `src/utils/`
- App constants: `src/constants/`

---

## Contributors

- [HuyHoangDevVN](https://github.com/HuyHoangDevVN)
- Your name here!

---

## License

MIT
