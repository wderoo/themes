import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="h-24 w-24 animate-spin"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Vite + React + TypeScript + AI
        </h1>
        <div className="mb-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          Edit{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
        <p className="text-gray-600">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
