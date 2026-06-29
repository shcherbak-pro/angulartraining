# Angular Training Lab

A modern Angular 22 training project with a refreshed Material UI.

The project demonstrates common Angular concepts in separate pages:

- routing and route params
- parent-to-child input
- child-to-parent output
- services
- custom pipes
- custom directives
- template-driven forms
- reactive forms

## Tech stack

- Angular 22
- Angular Material
- Standalone components
- Hash routing for GitHub Pages
- GitHub Actions deployment

## Local development

```bash
npm install --registry=https://registry.npmjs.org/
npm start
```

## Build

```bash
npm run build
```

For GitHub Pages, the workflow builds with a repository-based `base-href`:

```bash
npm run build -- --base-href "/<repo-name>/"
```

## GitHub Pages

The deployment workflow is located here:

```text
.github/workflows/deploy-github-pages.yml
```

In GitHub repository settings, enable:

```text
Settings → Pages → Source → GitHub Actions
```
