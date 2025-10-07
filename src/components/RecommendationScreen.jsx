import React from "react";

const RecommendationScreen = ({ data, onRestart }) => (
  <div className="text-center">
    <h2 className="text-xl font-bold mb-4 text-green-600">
      🌼 Your Wellness Recommendations
    </h2>
    <ul className="text-left mb-6 space-y-2">
      {data.map((item, idx) => (
        <li
          key={idx}
          className="bg-green-50 p-3 rounded-lg border border-green-200"
        >
          {item}
        </li>
      ))}
    </ul>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      onClick={onRestart}
    >
      Start Over
    </button>
  </div>
);

export default RecommendationScreen;
