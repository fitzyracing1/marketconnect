# Market Connect

**Base44 App** — Idea submission and market connection platform.

This is a clone of `market-connect` published as `marketconnect` for cleaner naming and GitHub Pages hosting.

## Live Demo (GitHub Pages)

Once GitHub Pages is enabled, the site will be available at:

**https://fitzyracing1.github.io/marketconnect/**

## Quick Start

```bash
git clone https://github.com/fitzyracing1/marketconnect.git
cd marketconnect
npm install
npm run dev
```

## Base44 Setup

1. Install the Base44 CLI: `npm install -g base44@latest`
2. Run local backend + frontend: `base44 dev`
3. See [Base44 CLI docs](https://docs.base44.com/developers/references/cli/get-started/overview)

## Project Structure

- `src/` — React + Vite frontend
- `base44/` — Entity schemas and app config
- `src/pages/` — Main routes (Home, Login, Dashboard, SubmissionDetail, etc.)
- `src/components/` — UI and feature components

## Enabling GitHub Pages

1. Go to the repository **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. The included workflow will automatically build and deploy on every push to `main`

Alternatively, you can publish from the `/docs` folder after a local build.

## License

Private / proprietary to the project owner.
