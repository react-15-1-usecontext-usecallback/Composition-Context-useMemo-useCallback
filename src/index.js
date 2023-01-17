import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const ButtonResset = (props) => {
  const { setScore } = props;
  return (
    <button
      className="score-button"
      onClick={() => {
        setScore(0);
      }}
    >
      Reset
    </button>
  );
};

const CurrentScore = (props) => {
  return <div className="score">{props.score}</div>;
};

const Score = (props) => {
  const { score, setScore } = props;
  return (
    <div className="score-container">
      <h1>Your Score</h1>
      <div className="score-wrap">
        <CurrentScore score={score} />
        <ButtonResset setScore={setScore} />
      </div>
    </div>
  );
};

const ButtonAdd = (props) => {
  const { number, addScore } = props;
  return (
    <button
      className="score-button"
      onClick={() => {
        addScore(number);
      }}
    >
      +{number}
    </button>
  );
};

const AddingScore = (props) => {
  const { addScore } = props;
  return (
    <div className="add-score-container">
      <h1>Add points</h1>
      <div className="score-buttons">
        <ButtonAdd number={1} addScore={addScore} />
        <ButtonAdd number={5} addScore={addScore} />
        <ButtonAdd number={10} addScore={addScore} />
      </div>
    </div>
  );
};

const App = () => {
  const [score, setScore] = useState(10);
  const addScore = (number) => {
    setScore(score + number);
  };
  return (
    <div className="App">
      <Score score={score} setScore={setScore} />
      <AddingScore addScore={addScore} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
