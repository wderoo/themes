# My React App

A modern React application built with Vite, TypeScript, Tailwind CSS, and Biome.js.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React with new features
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧹 **Biome.js** - Fast linter and formatter

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter
- `npm run lint:fix` - Run linter with auto-fix
- `npm run format` - Check formatting
- `npm run format:fix` - Fix formatting
- `npm run check` - Run all checks (lint + format)
- `npm run check:fix` - Run all checks with auto-fix

## Project Structure

```
src/
├── assets/          # Static assets
├── App.tsx          # Main App component
├── App.css          # App styles
├── main.tsx         # Application entry point
└── index.css        # Global styles with Tailwind
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Biome.js** - Linting and formatting
- **PostCSS** - CSS processing

## Development

This project uses Biome.js for code linting and formatting. The configuration is set up to maintain consistent code style across the project.

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License.
