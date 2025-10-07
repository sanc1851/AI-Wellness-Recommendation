import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import MoodInput from "./components/MoodInput";
import ActivityInput from "./components/ActivityInput";
import RecommendationScreen from "./components/RecommendationScreen";

const App = () => {
  const [screen, setScreen] = useState(1);
  const [userInput, setUserInput] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  const handleNext = (data) => {
    setUserInput((prev) => ({ ...prev, ...data }));
    setScreen((prev) => prev + 1);
  };

  const handleBack = () => setScreen((prev) => prev - 1);

  const handleGenerate = () => {
    // Simple mock AI logic based on mood/activity
    const { mood = "", activity = "" } = userInput;
    let output = [];

    if (mood.includes("stress"))
      output.push("Try deep breathing for 5 minutes to relax.");
    if (mood.includes("tired"))
      output.push("Take a short walk or power nap to recharge.");
    if (activity.includes("reading"))
      output.push("Read a motivational or calming book before bed.");
    if (output.length === 0)
      output = [
        "Go for a 15-minute walk outdoors.",
        "Drink enough water today.",
        "Spend time doing something creative.",
      ];

    setRecommendations(output);
    setScreen(4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300">
        {screen === 1 && <WelcomeScreen onNext={handleNext} />}
        {screen === 2 && <MoodInput onNext={handleNext} onBack={handleBack} />}
        {screen === 3 && <ActivityInput onNext={handleGenerate} onBack={handleBack} />}
        {screen === 4 && (
          <RecommendationScreen
            data={recommendations}
            onRestart={() => {
              setScreen(1);
              setUserInput({});
              setRecommendations([]);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
