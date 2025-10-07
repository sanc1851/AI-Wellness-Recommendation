import React, { useState } from "react";

const MoodInput = ({ onNext, onBack }) => {
  const [mood, setMood] = useState("");

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <input
        type="text"
        placeholder="e.g., stressed, calm, tired"
        className="border p-2 w-full rounded-lg mb-4 focus:outline-blue-400"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => onNext({ mood })}
          disabled={!mood.trim()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoodInput;
