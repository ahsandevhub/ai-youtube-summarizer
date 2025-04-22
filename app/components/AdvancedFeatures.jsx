"use client";
import { useState } from "react";

const AdvancedFeatures = ({ summary }) => {
  const [activeTab, setActiveTab] = useState("sentiment");

  if (!summary) return null;

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("sentiment")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "sentiment"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Sentiment Analysis
          </button>
          <button
            onClick={() => setActiveTab("keywords")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "keywords"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Key Topics
          </button>
          <button
            onClick={() => setActiveTab("qa")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "qa"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Q&A
          </button>
        </nav>
      </div>

      <div className="mt-4">
        {activeTab === "sentiment" && (
          <div>
            <p>Sentiment analysis results would appear here</p>
          </div>
        )}
        {activeTab === "keywords" && (
          <div>
            <p>Key topics and keywords would appear here</p>
          </div>
        )}
        {activeTab === "qa" && (
          <div>
            <p>Question answering feature would appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFeatures;
