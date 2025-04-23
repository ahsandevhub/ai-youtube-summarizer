"use client";
import { useState } from "react";

const EducationalTools = ({ summary }) => {
  const [activeTool, setActiveTool] = useState("guide");

  if (!summary) return null;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20">
      <div className="border-b border-white/20">
        <nav className="-mb-px flex space-x-8 px-6">
          <button
            onClick={() => setActiveTool("guide")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTool === "guide"
                ? "border-indigo-400 text-white"
                : "border-transparent text-white/60 hover:text-white/80 hover:border-white/40"
            }`}
          >
            Study Guide
          </button>
          <button
            onClick={() => setActiveTool("flashcards")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTool === "flashcards"
                ? "border-indigo-400 text-white"
                : "border-transparent text-white/60 hover:text-white/80 hover:border-white/40"
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => setActiveTool("concepts")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTool === "concepts"
                ? "border-indigo-400 text-white"
                : "border-transparent text-white/60 hover:text-white/80 hover:border-white/40"
            }`}
          >
            Key Concepts
          </button>
        </nav>
      </div>

      <div className="p-6">
        {activeTool === "guide" && (
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-3">Study Guide</h3>
            <p className="text-white/80">
              Generated study guide would appear here
            </p>
            <ul className="list-disc pl-5 mt-4 text-white/80">
              <li>Review key vocabulary and definitions.</li>
              <li>Understand the main themes and arguments.</li>
              <li>Practice with sample questions.</li>
            </ul>
          </div>
        )}
        {activeTool === "flashcards" && (
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-3">Flashcards</h3>
            <p className="text-white/80 mb-4">
              Quick review of essential terms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-500/20 p-4 rounded-md border border-indigo-400/30">
                <p className="text-white font-medium">Term: Photosynthesis</p>
                <p className="text-indigo-200 text-sm">
                  Definition: The process by which green plants use sunlight...
                </p>
              </div>
              <div className="bg-indigo-500/20 p-4 rounded-md border border-indigo-400/30">
                <p className="text-white font-medium">Term: Ecosystem</p>
                <p className="text-indigo-200 text-sm">
                  Definition: A biological community of interacting organisms...
                </p>
              </div>
              {/* More flashcards can be added here */}
            </div>
          </div>
        )}
        {activeTool === "concepts" && (
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-3">
              Key Concepts
            </h3>
            <p className="text-white/80 mb-4">Fundamental concepts to grasp:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-500/20 text-indigo-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 15h9v2l9-12h-9v7l-3-3z"
                    />
                  </svg>
                </span>
                <p className="text-white font-medium">Energy Transfer</p>
                <p className="text-white/80 text-sm">
                  - Understanding how energy flows through different systems.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-500/20 text-indigo-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 012 2v1m-2-3v1a2 2 0 002 2h1M4 12h1m2 0a2 2 0 012-2V7m-2 3v4a2 2 0 002 2h1m-2-3h1m-2 0a2 2 0 012 2v1M4 18h1m2 0a2 2 0 002-2v-1M4 6h1m2 0a2 2 0 002 2v1m-2-3v4a2 2 0 002 2h1m-2-3h1M4 12h1m2 0a2 2 0 012-2V7m-2 3v4a2 2 0 002 2h1m-2-3h1m-2 0a2 2 0 012 2v1M4 18h1m2 0a2 2 0 002-2v-1M12 18v2m0-2a2 2 0 01-2-2v-1m2 3v-1a2 2 0 00-2-2h-1M18 12h-1m-2 0a2 2 0 01-2 2v5m2-3v-4a2 2 0 00-2-2h-1m2-3h-1m-2 0a2 2 0 01-2-2V7m2 3v4a2 2 0 00-2-2h-1m2-3h-1M18 12h-1m-2 0a2 2 0 01-2 2v5m2-3v-4a2 2 0 00-2-2h-1m2-3h-1m-2 0a2 2 0 01-2-2V7m2 3v4a2 2 0 00-2-2h-1m-2-3h-1m-2 0a2 2 0 01-2-2v-1M18 6h-1m-2 0a2 2 0 01-2 2v1m2-3v1a2 2 0 00-2-2h-1M12 18v2m0-2a2 2 0 01-2-2v-1m2 3v-1a2 2 0 00-2-2h-1M18 12h-1m-2 0a2 2 0 01-2 2v5m2-3v-4a2 2 0 00-2-2h-1m2-3h-1m-2 0a2 2 0 01-2-2V7m2 3v4a2 2 0 00-2-2h-1m-2-3h-1m-2 0a2 2 0 01-2-2v-1M18 6h-1m-2 0a2 2 0 01-2 2v1m2-3v1a2 2 0 00-2-2h-1"
                    />
                  </svg>
                </span>
                <p className="text-white font-medium">Cellular Structure</p>
                <p className="text-white/80 text-sm">
                  - Understanding the different components and functions of
                  cells.
                </p>
              </div>
              {/* More key concepts can be added here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalTools;
