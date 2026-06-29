# Migration Report: Angular 8 to Angular 22

## Summary

The project was migrated from the old Angular 8 CLI structure to a modern Angular 22 application structure.

## Main changes

- Replaced Angular 8 dependencies with Angular 22 dependencies.
- Removed obsolete Angular 8 tooling:
  - `e2e/`
  - Protractor config
  - TSLint config
  - old `browserslist`
  - old `polyfills.ts`
  - old `test.ts`
- Migrated from `NgModule` bootstrap to `bootstrapApplication`.
- Converted components, directive, and pipe to standalone Angular APIs.
- Replaced old router module with `provideRouter` and route definitions in `app.routes.ts`.
- Enabled hash-based routing to make the SPA safer on GitHub Pages.
- Kept the training examples:
  - routing
  - route parameters
  - input/output component communication
  - services
  - pipes
  - directives
  - template-driven forms
  - reactive forms
- Added GitHub Pages deployment workflow.

## Notes

`package-lock.json` is intentionally not included. The GitHub Actions workflow uses `npm install` with the public npm registry and disables automatic setup-node caching to avoid lockfile/cache errors during web-only repository updates.

When you can work locally with the repository, you can regenerate a clean lockfile with:

```bash
npm install --package-lock-only --registry=https://registry.npmjs.org/
```
