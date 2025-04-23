"use client";

const SummaryOptions = ({ options, setOptions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
        <label className="block text-sm font-medium text-white mb-2">
          Summary Length
        </label>
        <select
          value={options.length}
          onChange={(e) => setOptions({ ...options, length: e.target.value })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent sm:text-sm rounded-md"
          style={{
            // Style for the select element itself
            backgroundColor: "rgba(255, 255, 255, 0.2)", // More subtle background
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            // Add these for the dropdown list
          }}
        >
          <option
            value="short"
            style={{
              backgroundColor: "#0f172a",
              color: "white",
            }}
          >
            Short (1-2 sentences)
          </option>
          <option
            value="medium"
            style={{
              backgroundColor: "#0f172a",
              color: "white",
            }}
          >
            Medium (paragraph)
          </option>
          <option
            value="long"
            style={{
              backgroundColor: "#0f172a",
              color: "white",
            }}
          >
            Detailed
          </option>
        </select>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
        <label className="block text-sm font-medium text-white mb-2">
          Format
        </label>
        <select
          value={options.format}
          onChange={(e) => setOptions({ ...options, format: e.target.value })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent sm:text-sm rounded-md"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <option
            value="paragraph"
            style={{
              backgroundColor: "#0f172a",
              color: "white",
            }}
          >
            Paragraph
          </option>
          <option
            value="bullet"
            style={{
              backgroundColor: "#0f172a",
              color: "white",
            }}
          >
            Bullet Points
          </option>
          <option
            value="keypoints"
            style={{
              backgroundColor: "#0f172a",
              color: "white",
            }}
          >
            Key Takeaways
          </option>
        </select>
      </div>
    </div>
  );
};

export default SummaryOptions;
