# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

developerFolio is a React-based portfolio template that allows developers to showcase their work, skills, and experience. The portfolio integrates with GitHub's GraphQL API to fetch and display repository data, and optionally with Medium to show blog posts.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs fetch.js first to get GitHub data)
npm start

# Build for production (runs fetch.js first)
npm build

# Run tests
npm test

# Format code with Prettier
npm run format

# Check if code is properly formatted
npm run check-format

# Deploy to GitHub Pages
npm run deploy
```

## Environment Setup

Before starting development:

1. Copy `env.example` to `.env`
2. Configure environment variables in `.env`:
   - `REACT_APP_GITHUB_TOKEN` - GitHub personal access token (classic, no scope required)
   - `GITHUB_USERNAME` - Your GitHub username
   - `USE_GITHUB_DATA` - Set to "true" to fetch GitHub data, "false" to use hardcoded values
   - `MEDIUM_USERNAME` - Your Medium username (optional, for blog integration)

The `.env` file is gitignored to prevent exposing tokens.

## Architecture

### Data Flow

1. **Build/Start Time**: `fetch.js` runs before the React app starts or builds, fetching:
   - GitHub profile data (name, bio, avatar, location)
   - Pinned repositories (up to 6)
   - Medium blog posts (if configured)
   - Data is written to `src/profile.json` (gitignored)

2. **Runtime**: React components read from `src/portfolio.js` for configuration and `src/profile.json` for GitHub/Medium data

### Project Structure

```
src/
├── portfolio.js          # MAIN CONFIGURATION FILE - edit this to customize
├── _globalColor.scss     # Global theme colors and variables
├── App.js               # Root component, renders Main container
├── components/          # Reusable UI components
│   ├── header/         # Site header with navigation
│   ├── footer/         # Site footer
│   ├── displayLottie/  # Lottie animation wrapper
│   ├── *Card/          # Various card components (blog, achievement, etc.)
│   └── ...
├── containers/          # Page sections (each is a portfolio section)
│   ├── Main.js         # Main layout, orchestrates all sections
│   ├── greeting/       # Hero/greeting section
│   ├── skills/         # Skills display
│   ├── education/      # Education timeline
│   ├── workExperience/ # Work experience
│   ├── projects/       # GitHub projects from API
│   ├── StartupProjects/# Big projects section
│   ├── achievement/    # Achievements and certifications
│   ├── blogs/          # Medium blogs integration
│   ├── talks/          # Conference talks
│   ├── podcast/        # Podcast section
│   ├── profile/        # GitHub profile card
│   └── twitter-embed/  # Twitter timeline
├── contexts/           # React contexts (StyleContext for theme)
└── hooks/              # Custom hooks (useLocalStorage for theme persistence)
```

### Key Files

**`src/portfolio.js`** - The single source of truth for portfolio content:
- Contains all configuration objects (greeting, skills, experience, etc.)
- Each section has its own object (e.g., `skillsSection`, `workExperience`)
- Sections can be toggled on/off with `display` or `displayX` boolean flags
- Uses `emoji()` function from `react-easy-emoji` for cross-browser emoji support

**`src/_globalColor.scss`** - Global styling:
- SCSS variables for colors throughout the app
- Separate variables for light/dark themes
- Social media brand colors
- Button, text, and background colors

**`fetch.js`** - Data fetching script:
- Runs before build/start via npm scripts
- Queries GitHub GraphQL API for user data and pinned repos
- Fetches Medium RSS feed if configured
- Writes data to `src/profile.json`
- Only runs if `USE_GITHUB_DATA="true"`

**`src/containers/Main.js`** - Layout orchestrator:
- Renders all portfolio sections in order
- Manages theme state (light/dark mode) using StyleContext
- Handles splash screen animation timing
- Theme preference persists in localStorage

### Theme System

- Light/dark mode toggle available in header
- Theme state managed via `StyleContext` (src/contexts/StyleContext.js)
- Theme preference stored in localStorage via `useLocalStorage` hook
- Dark mode respects system preference on first visit
- CSS classes applied at root level (`dark-mode` class on container)

### Customization Workflow

To customize the portfolio:

1. **Content**: Edit `src/portfolio.js` and modify the exported objects
2. **Colors**: Edit `src/_globalColor.scss` SCSS variables
3. **Lottie Animations**: Replace JSON files in `src/assets/lottie/`
4. **Resume**: Replace `src/containers/greeting/resume.pdf`
5. **SEO**: Edit `public/index.html` for title, meta tags, and Open Graph data
6. **Homepage URL**: Update `homepage` field in `package.json` for deployment

## Code Quality

- **Pre-commit hooks**: Prettier runs automatically on `.json`, `.js`, and `.css` files via pre-commit framework
- **Formatting**: Use `npm run format` to format all code, or `npm run check-format` to verify
- **Testing**: Tests use Jest and Enzyme (`npm test`)

## Deployment

The project is configured for deployment to GitHub Pages:
- Update `homepage` in `package.json` to match your GitHub Pages URL
- Run `npm run deploy` to build and deploy to the `master` branch
- Alternatively, GitHub Actions can be configured for automatic weekly deploys (see README)

## Important Notes

- GitHub data fetching requires a valid token in `.env`, even if it has no scopes
- If `USE_GITHUB_DATA="false"`, you must remove or handle components that depend on `profile.json`
- The `fetch.js` script must complete successfully before the app can build
- Pinned repositories on GitHub must be set up for the Projects section to display properly
- Each container (section) can be individually enabled/disabled via portfolio.js configuration
