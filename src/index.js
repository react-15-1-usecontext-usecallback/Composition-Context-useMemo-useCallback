import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Score = (props) => {
  const [score, setScore] = useState(10);
  return (
    <div className="score-container">
      <h1>Your Score</h1>
      <div className="score-wrap">
        <div className="score">{score}</div>
        <button
          className="score-button"
          onClick={() => {
            setScore(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const ButtonAdd = (props) => {
  const { number } = props;
  return <button className="score-button">+{number}</button>;
};

const AddingScore = (props) => {
  return (
    <div className="add-score-container">
      <h1>Add points</h1>
      <div className="score-buttons">
        <ButtonAdd number={1} />
        <ButtonAdd number={5} />
        <ButtonAdd number={10} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Score />
      <AddingScore />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
