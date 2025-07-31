import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center space-x-4">
            <a
              href="https://vitejs.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Vite logo"
                className="h-16 w-16 transition-all duration-300 hover:drop-shadow-lg"
                src={viteLogo}
              />
            </a>
            <span className="text-4xl">+</span>
            <a
              href="https://react.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="React logo"
                className="h-16 w-16 animate-spin-slow transition-all duration-300 hover:drop-shadow-lg"
                src={reactLogo}
              />
            </a>
            <span className="text-4xl">+</span>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg transition-all duration-300 hover:shadow-xl">
              <span className="font-bold text-sm text-white">TW</span>
            </div>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-bold text-4xl text-transparent md:text-6xl">
            Vite + React + Tailwind
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg">
            A modern starter template with Vite for blazing fast development,
            React for building UIs, and Tailwind CSS for beautiful styling.
          </p>
        </div>

        {/* Counter Card */}
        <div className="mx-auto mb-12 max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <div className="text-center">
            <h2 className="mb-6 font-semibold text-2xl text-gray-800">
              Interactive Counter
            </h2>
            <div className="mb-6">
              <span className="font-bold text-6xl text-purple-600">
                {count}
              </span>
            </div>
            <button
              className="transform rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-600 hover:shadow-xl"
              onClick={() => setCount((count) => count + 1)}
            >
              Click me!
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 text-xl">
              ⚡ Vite
            </h3>
            <p className="text-gray-600">
              Lightning fast build tool with instant hot module replacement and
              optimized builds.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 text-xl">
              ⚛️ React
            </h3>
            <p className="text-gray-600">
              Modern React with hooks, TypeScript support, and component-based
              architecture.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
              <svg
                className="h-6 w-6 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 text-xl">
              🎨 Tailwind CSS
            </h3>
            <p className="text-gray-600">
              Utility-first CSS framework for rapid UI development with
              beautiful designs.
            </p>
          </div>
        </div>

        {/* Getting Started */}
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 font-semibold text-2xl text-gray-800">
            🚀 Getting Started
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="rounded bg-purple-100 px-2 py-1 font-semibold text-purple-800 text-sm">
                1
              </span>
              <div>
                <code className="rounded bg-gray-100 px-3 py-1 text-sm">
                  npm install
                </code>
                <p className="mt-1 text-gray-600 text-sm">
                  Install dependencies
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="rounded bg-purple-100 px-2 py-1 font-semibold text-purple-800 text-sm">
                2
              </span>
              <div>
                <code className="rounded bg-gray-100 px-3 py-1 text-sm">
                  npm run dev
                </code>
                <p className="mt-1 text-gray-600 text-sm">
                  Start development server
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="rounded bg-purple-100 px-2 py-1 font-semibold text-purple-800 text-sm">
                3
              </span>
              <div>
                <code className="rounded bg-gray-100 px-3 py-1 text-sm">
                  npm run build
                </code>
                <p className="mt-1 text-gray-600 text-sm">
                  Build for production
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
