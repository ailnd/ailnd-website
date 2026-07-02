# React + TypeScript + Tailwind CSS SPA — Setup Design

**Date:** 2026-07-02  
**Status:** Approved

## Summary

Initialize a static, single-page React application using Vite, TypeScript (strict), and Tailwind CSS v3. No routing, no global state management, no backend API calls.

## Stack

| Tool | Version/Config |
|------|---------------|
| React | 18 |
| TypeScript | 5.x (strict mode) |
| Tailwind CSS | v3 via PostCSS |
| Vite | 5.x |
| Package manager | npm |

## Project Structure

```
ai_ld_app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # static images, icons
│   ├── components/      # reusable UI components
│   ├── App.tsx          # root component
│   ├── main.tsx         # entry point
│   └── index.css        # Tailwind directives + global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Configuration

### TypeScript
- Strict mode enabled (`"strict": true`)
- Standard Vite `react-ts` template tsconfig

### Tailwind CSS
- Installed via PostCSS
- `content` glob: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- No custom theme extensions — plain Tailwind defaults
- Directives added to `src/index.css`

### Vite
- Zero custom config beyond template defaults
- No aliases, proxies, or extra plugins

## Constraints

- Single page — no React Router
- Component-level state only — no Zustand, Redux, etc.
- Purely static — no API calls or data fetching library
