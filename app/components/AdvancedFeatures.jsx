"use client";
import { useState } from "react";

const AdvancedFeatures = ({ summary }) => {
  const [activeTab, setActiveTab] = useState("sentiment");

  if (!summary) return null;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20">
      <div className="border-b border-white/20">
        <nav className="-mb-px flex space-x-8 px-6">
          <button
            onClick={() => setActiveTab("sentiment")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "sentiment"
                ? "border-indigo-400 text-white"
                : "border-transparent text-white/60 hover:text-white/80 hover:border-white/40"
            }`}
          >
            Sentiment Analysis
          </button>
          <button
            onClick={() => setActiveTab("keywords")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "keywords"
                ? "border-indigo-400 text-white"
                : "border-transparent text-white/60 hover:text-white/80 hover:border-white/40"
            }`}
          >
            Key Topics
          </button>
          <button
            onClick={() => setActiveTab("qa")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "qa"
                ? "border-indigo-400 text-white"
                : "border-transparent text-white/60 hover:text-white/80 hover:border-white/40"
            }`}
          >
            Q&A
          </button>
        </nav>
      </div>

      <div className="p-6">
        {activeTab === "sentiment" && (
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-3">
              Sentiment Analysis
            </h3>
            <p className="text-white/80">
              Sentiment analysis results would appear here
            </p>
            <div className="mt-4 flex items-center justify-center py-8">
              <div
                className="radial-progress text-indigo-400"
                style={{
                  "--value": 70,
                  "--size": "8rem",
                  "--thickness": "8px",
                }}
              >
                <span className="text-white font-medium">70% Positive</span>
              </div>
            </div>
          </div>
        )}
        {activeTab === "keywords" && (
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-3">Key Topics</h3>
            <p className="text-white/80 mb-4">
              Key topics and keywords extracted from the content:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "AI",
                "Machine Learning",
                "Neural Networks",
                "Data Science",
                "Algorithms",
                "Deep Learning",
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-sm border border-indigo-400/30"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
        {activeTab === "qa" && (
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-3">
              Question Answering
            </h3>
            <p className="text-white/80 mb-4">
              Ask questions about the video content:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-500/20 p-3 rounded-lg border border-indigo-400/30 flex-1">
                  <p className="text-white font-medium mb-1">
                    What is the main topic of this video?
                  </p>
                  <p className="text-white/80 text-sm">
                    The main topic is artificial intelligence and its
                    applications in modern technology.
                  </p>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFeatures;
