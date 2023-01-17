import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Context = createContext();

const ButtonResset = () => {
  const store = useContext(Context);
  const { setScore } = store;
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

const CurrentScore = () => {
  const store = useContext(Context);
  return <div className="score">{store.score}</div>;
};

const Score = () => {
  return (
    <div className="score-container">
      <h1>Your Score</h1>
      <div className="score-wrap">
        <CurrentScore />
        <ButtonResset />
      </div>
    </div>
  );
};

const ButtonAdd = (props) => {
  const { number } = props;
  const store = useContext(Context);
  return (
    <button
      className="score-button"
      onClick={() => {
        store.addScore(number);
      }}
    >
      +{number}
    </button>
  );
};

const AddingScore = () => {
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
  const [score, setScore] = useState(0);
  const addScore = (number) => {
    setScore(score + number);
  };
  const value = {
    score,
    setScore,
    addScore,
  };
  return (
    <Context.Provider value={value}>
      <div className="App">
        <Score />
        <AddingScore />
      </div>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
