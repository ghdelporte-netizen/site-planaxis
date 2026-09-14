# AI Rules — Planaxis Medical Website

## Tech Stack (5–10 bullet points)

- **Vanilla JavaScript (ES modules)** — All client-side logic lives in `.js` files using modern `import`/`export` syntax; no framework (React/Vue/Svelte) is used.
- **Server-side rendering** — HTML is generated on the Node.js server via `server.js` using template literals from page modules (`src/pages/*.js`); the server streams HTML directly to the client.
- **Custom CSS with CSS variables** — Global theming lives in `public/styles.css` using `:root` variables (colors, fonts, spacing, shadows, radii). No CSS framework (Tailwind, Bootstrap, etc.) is used.
- **Node.js http server** — `server.js` (Node built-in `http` module) serves HTML pages and static assets (`public/`). No Express, no Koa, no other framework.
- **Static assets & data files** — Images/SVGs under `public/assets/`, structured data under `src/data/` (center.js, doctors.js, specialties.js, faq.js). No database; all content is baked into the server response.
- **No build / bundler step** — Files are served as-is; `package.json` only defines `start`/`dev` scripts that run `node server.js`. No Vite, Webpack, Babel, or TypeScript compilation.
- **Inline SVG icons** — Icons are hand-written `<svg>` elements directly in JSX/HTML markup; no icon library (lucide-react, @heroicons) is installed or required.
- **Google Fonts only** — Font loading via `@import url('https://fonts.googleapis.com/css2...')` in `styles.css`. No local font files or font‑subsetting pipelines.
- **No TypeScript** — All JavaScript is plain `.js`; no `.ts`/`.tsx` files, no type definitions, no `tsconfig.json`.
- **Custom routing in server.js** — Route matching is hand‑coded (URL pathname checks) rather than using a router library (React Router, Express Router, etc.).

## Library / Dependency Rules

| Category | What to Use | Why |
|---|---|---|
| **UI framework** | **None** — keep the app vanilla JS/HTML/CSS | The existing codebase has no framework dependency; adding one would require a build step and major refactor. |
| **CSS framework** | **None** — use custom CSS variables in `styles.css` | All design tokens, layout, and components are already expressed with `:root` variables and vanilla rules. |
| **Icon library** | **None** — use inline `<svg>` directly | Icons (e.g., navigation arrows, trust badges, FAQ arrows) are already embedded as inline SVG; no external package needed. |
| **Font loading** | **Google Fonts @import** only | The only typeface loading mechanism in the project; adding local fonts or subsetting would require build changes. |
| **Data store** | **None** — data is static JSON‑like objects in `src/data/` | All content (doctors, specialties, FAQ) is served as JavaScript objects; no database driver or ORM is used. |
| **Routing** | **Custom pathname matching in `server.js`** | The server explicitly checks `req.url` paths; no router library is installed or required. |
| **Form handling** | **Native `<form>` + `event.preventDefault()`** | The booking wizard uses vanilla `handleBookingSubmit`; no form library (formik, react-hook-form) is present. |
| **HTTP client** | **`window.fetch`** when needed, or native `XMLHttpRequest` | No Axios, no Got; the codebase does not currently make external API calls from the browser. |
| **State management** | **None** — use plain variables / `window.bookingState` object | The booking wizard stores state on `window.bookingState`; no global store (Redux, Zustand, Jotai) is used. |
| **Testing** | **None** — no test framework configured | `package.json` has no test script; there are no `__tests__` or `*.test.*` files. |
| **Package additions** | **Only add if explicitly required** and you update `server.js`, all page modules, and `styles.css` accordingly | Any new dependency must not break the zero‑build, vanilla‑JS contract. Always prefer native APIs first. |

## Guidelines for Adding New Features

1. **Prefer vanilla JS** — If a feature can be done with DOM API, `fetch`, or template literals, do it there first. Only consider a library if the feature is impossible without one.
2. **Keep CSS in `styles.css`** — All new styles must use the existing CSS variable system (`var(--color-...)`, `var(--radius-...)`, etc.). Do not introduce Tailwind‑style utility classes or CSS‑in‑JS.
3. **Server‑side HTML only** — New pages go in `src/pages/*.js` and export a `render*Page()` function. Add the route in `server.js`; do not create a React component or a Vite‑served SPA.
4. **Data stays in `src/data/`** — New data sets go as `.js` modules exporting plain objects/arrays. Import them in the page module that needs them.
5. **No TypeScript** — Keep all files as `.js`. If type safety is needed, that would be a larger architectural change beyond the scope of these rules.
6. **Test the build** — After adding any new file or dependency, run `node server.js` and verify the page renders correctly at `http://localhost:3001`.