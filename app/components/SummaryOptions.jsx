"use client";

const SummaryOptions = ({ options, setOptions }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Summary Length
        </label>
        <select
          value={options.length}
          onChange={(e) => setOptions({ ...options, length: e.target.value })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="short">Short (1-2 sentences)</option>
          <option value="medium">Medium (paragraph)</option>
          <option value="long">Detailed</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Format
        </label>
        <select
          value={options.format}
          onChange={(e) => setOptions({ ...options, format: e.target.value })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="paragraph">Paragraph</option>
          <option value="bullet">Bullet Points</option>
          <option value="keypoints">Key Takeaways</option>
        </select>
      </div>
    </div>
  );
};

export default SummaryOptions;
