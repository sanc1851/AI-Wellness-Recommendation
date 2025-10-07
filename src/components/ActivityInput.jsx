import React, { useState } from "react";

const ActivityInput = ({ onNext, onBack }) => {
  const [activity, setActivity] = useState("");

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">What activities do you enjoy?</h2>
      <input
        type="text"
        placeholder="e.g., yoga, reading, walking"
        className="border p-2 w-full rounded-lg mb-4 focus:outline-green-400"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => onNext({ activity })}
          disabled={!activity.trim()}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ActivityInput;
