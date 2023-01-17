import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className="score-container">
        <h1>Your Score</h1>
        <div className="score-wrap">
          <div className="score">10</div>
          <button className="score-button">Reset</button>
        </div>
      </div>
      <div className="add-score-container">
        <h1>Add points</h1>
        <div className="score-buttons">
          <button className="score-button">+1</button>
          <button className="score-button">+5</button>
          <button className="score-button">+10</button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
