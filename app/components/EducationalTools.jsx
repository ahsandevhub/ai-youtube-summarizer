"use client";
import { useState } from "react";

const EducationalTools = ({ summary }) => {
  const [activeTool, setActiveTool] = useState("guide");

  if (!summary) return null;

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Educational Tools</h2>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <button
          onClick={() => setActiveTool("guide")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTool === "guide"
              ? "bg-indigo-100 text-indigo-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Study Guide
        </button>
        <button
          onClick={() => setActiveTool("flashcards")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTool === "flashcards"
              ? "bg-indigo-100 text-indigo-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Flashcards
        </button>
        <button
          onClick={() => setActiveTool("concepts")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTool === "concepts"
              ? "bg-indigo-100 text-indigo-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Key Concepts
        </button>
      </div>

      <div className="prose max-w-none">
        {activeTool === "guide" && (
          <div>
            <h3>Study Guide</h3>
            <p>Generated study guide would appear here</p>
          </div>
        )}
        {activeTool === "flashcards" && (
          <div>
            <h3>Flashcards</h3>
            <p>Flashcard content would appear here</p>
          </div>
        )}
        {activeTool === "concepts" && (
          <div>
            <h3>Key Concepts</h3>
            <p>Important concepts would be highlighted here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalTools;
