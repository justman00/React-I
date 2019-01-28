import React from "react";
import "./App.css";

import DisplayNums from "./components/ButtonComponents/DisplayNums";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <DisplayNums />
    </div>
  );
};

export default App;
