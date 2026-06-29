# Angular Training

This repository contains an Angular training application migrated from Angular 8 to Angular 22.

## What is included

- Standalone Angular components
- Angular Router with hash-based routing for GitHub Pages compatibility
- Template-driven forms
- Reactive forms
- Custom directive example
- Custom pipe example
- Simple injectable service example
- GitHub Actions workflow for GitHub Pages deployment

## Local development

Use Node.js compatible with Angular 22. Angular 22 requires Node.js `^22.22.3 || ^24.15.0 || ^26.0.0`.

```bash
npm install --registry=https://registry.npmjs.org/
npm start
```

## Build

```bash
npm run build
```

For GitHub Pages, the workflow uses:

```bash
npm run build -- --base-href "/${{ github.event.repository.name }}/"
```

## GitHub Pages

1. Open repository settings.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or `master`.
5. Wait for the `Deploy Angular app to GitHub Pages` workflow to finish.
