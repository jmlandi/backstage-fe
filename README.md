# Backstage Website Front-End

Welcome to the front-end of **Backstage Productions**, a Brazilian company specializing in premium artist productions and event management. This project delivers a modern, visually stunning website to showcase artists, events, and the unique value of Backstage Productions.

## About Backstage Productions
Backstage Productions is dedicated to elevating the experience of artists and audiences alike, providing top-tier production services with a focus on premium design and innovation. Our website reflects our commitment to quality, creativity, and the vibrant identity of Backstage.

## Tech Stack
- [Next.js](https://nextjs.org/) (v15)
- [React](https://react.dev/) (v19)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) for code quality

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
1. Clone the repository:
	 ```bash
	 git clone https://github.com/jmlandi/backstage-website.git
	 cd backstage-website
	 ```
2. Install dependencies:
	 ```bash
	 npm install
	 ```

### Development
To start the development server with [Turbopack](https://turbo.build/pack):
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production
To build the optimized production version:
```bash
npm run build
```
To start the production server:
```bash
npm start
```

### Linting & Formatting
- Lint the codebase:
	```bash
	npm run lint
	```
- Format code with Prettier:
	```bash
	npm run format
	```
- Check formatting:
	```bash
	npm run format:check
	```

## Project Structure
- `src/app/` — Main application code (components, pages, styles)
- `public/` — Static assets (images, icons, etc.)
- `package.json` — Project metadata and scripts
- `tsconfig.json` — TypeScript configuration
- `postcss.config.mjs` & `tailwind.config.js` — Styling configuration

## License
This project is property of Backstage Productions only public for portfolio.

---

For questions or support, contact the Backstage Productions team.
