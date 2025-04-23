"use client";
import { useState } from "react";

const TranscriptSection = ({ transcript, videoId }) => {
  const [showTranscript, setShowTranscript] = useState(true);

  if (!transcript) return null;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-6 border border-white/20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Video Transcript</h2>
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="text-indigo-400 hover:text-indigo-300 text-sm font-medium px-3 py-1 rounded hover:bg-indigo-500/20 transition-colors bg-indigo-500/10" // Adjusted colors for better contrast on glassmorphism
        >
          {showTranscript ? "Hide" : "Show"} Transcript
        </button>
      </div>

      {showTranscript && (
        <div className="max-h-[800px] overflow-y-auto glassmorphism-scrollbar pr-2">
          {transcript.map((item, index) => (
            <div
              key={index}
              className="mb-2 flex items-start text-sm leading-snug"
            >
              <button
                onClick={() =>
                  window.open(
                    `https://youtu.be/$${videoId}?t=${Math.floor(item.start)}s`,
                    "_blank"
                  )
                }
                className="text-indigo-300 hover:text-indigo-200 font-mono bg-indigo-500/20 px-2 py-0.5 rounded mr-2 hover:bg-indigo-500/30 transition-colors" // Adjusted colors for better contrast
              >
                {formatTime(item.start)}
              </button>
              <span className="text-white/80">{item.text}</span>{" "}
              {/* Changed text color */}
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
