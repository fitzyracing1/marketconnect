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

---

```barrage
# Market Connect

> A simple online place where people can submit their ideas and others can see and connect with them.

## Purpose
Market Connect lets anyone type out a new idea, save it, and share it. Other people can look at the ideas, leave feedback, or decide they want to work with the person who submitted it. It is built so that the website and the behind-the-scenes data storage talk to each other cleanly.

## How it works (plain English)
1. A visitor opens the website.
2. They can create an account or sign in.
3. Once signed in, they can write a short description of their idea and submit it.
4. The idea is stored and appears on a list that other signed-in users can browse.
5. Anyone can open a single idea to see more details.
6. The system keeps track of who submitted what and whether the idea is still waiting, approved, or rejected.

## Key ideas
- Account system (sign up / sign in so we know who is talking)
- Idea submission form (a simple box where you type your idea)
- Idea list and detail pages (so people can browse and open individual ideas)
- Status tracking (pending, approved, rejected)

## The actual code structure
The project is organized into folders:
- pages → the different screens people see (home, login, dashboard, idea details)
- components → reusable pieces such as the navigation bar and buttons
- lib → helper code that handles user accounts and common tools
- api → the connection to the Base44 backend that stores the data

## Decisions the program makes
- If you are not signed in, you are sent to the login page when you try to open the dashboard.
- After you submit an idea, it starts with the status “pending”.
- The home page shows different buttons depending on whether you are already signed in or not.
```

---

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
