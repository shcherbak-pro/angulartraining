# Angular Training UI Refresh Report

## Scope

This update keeps the Angular 22 migration and refreshes the UI layer so the training project looks like a small real website instead of a raw demo playground.

## Main changes

- Added Angular Material dependencies:
  - `@angular/material`
  - `@angular/cdk`
  - `@angular/animations`
- Added async animations provider in `app.config.ts`.
- Rebuilt the app shell:
  - sticky top toolbar
  - brand block
  - Material navigation buttons
  - hero section
  - shared content card container
- Reworked pages with Material components:
  - `mat-card`
  - `mat-button`
  - `mat-form-field`
  - `mat-input`
  - `mat-select`
  - `mat-checkbox`
  - `mat-chip`
- Replaced old Bootstrap-style UI with clean Material-based CSS.
- Removed Bootstrap CDN import from global styles.
- Kept all training examples:
  - routing
  - route params
  - input/output communication
  - service usage
  - custom pipe
  - custom directive
  - template-driven form
  - reactive form
- Kept GitHub Pages workflow with:
  - Node 24
  - `package-manager-cache: false`
  - `npm install` against public npm registry
  - dynamic base href based on repository name

## Notes

`package-lock.json` is intentionally not included because the previous lockfile could contain environment-specific registry URLs. The GitHub Actions workflow uses `npm install` instead of `npm ci` for now.

When working locally, a clean lockfile can be generated later with:

```bash
npm install --package-lock-only --registry=https://registry.npmjs.org/
```

After that, the workflow can be switched back from `npm install` to `npm ci`.
