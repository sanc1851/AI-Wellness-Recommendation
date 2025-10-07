import React from "react";

const WelcomeScreen = ({ onNext }) => (
  <div className="text-center">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">
      🌿 AI Wellness Companion
    </h1>
    <p className="text-gray-600 mb-6">
      Discover personalized wellness recommendations in seconds.
    </p>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      onClick={() => onNext()}
    >
      Start
    </button>
  </div>
);

export default WelcomeScreen;
