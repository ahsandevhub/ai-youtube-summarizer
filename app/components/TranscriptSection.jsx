"use client";
import { useState } from "react";

const TranscriptSection = ({ transcript, videoId }) => {
  const [showTranscript, setShowTranscript] = useState(true);

  if (!transcript) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Video Transcript
        </h2>
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium px-3 py-1 rounded hover:bg-indigo-50 transition-colors"
        >
          {showTranscript ? "Hide" : "Show"} Transcript
        </button>
      </div>

      {showTranscript && (
        <div className="max-h-96 overflow-y-auto pr-2">
          {transcript.map((item, index) => (
            <div
              key={index}
              className="mb-2 flex items-start text-sm leading-snug"
            >
              <button
                onClick={() =>
                  window.open(
                    `https://youtu.be/${videoId}?t=${Math.floor(item.start)}s`,
                    "_blank"
                  )
                }
                className="text-indigo-600 hover:text-indigo-800 font-mono bg-indigo-50 px-2 py-0.5 rounded mr-2 hover:bg-indigo-100 transition-colors"
              >
                {formatTime(item.start)}
              </button>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Helper function to format time as MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

export default TranscriptSection;
