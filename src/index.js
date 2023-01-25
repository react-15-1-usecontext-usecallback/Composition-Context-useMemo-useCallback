import React, { useCallback, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import User from "./User";
import AddingScore from "./AddingScore";
import Context from "./Context";

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

const App = () => {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const getGreeting = useCallback((name, surname) => {
    if (name.length < 3 || surname.length < 3) {
      return "Hello new user!!!";
    }
    const nameToDisplay =
      name.substring(0, 1).toUpperCase() + name.substring(1, name.length);
    const surnameToDisplay =
      surname.substring(0, 1).toUpperCase() + surname.substring(1, name.length);
    return `Hello ${nameToDisplay} ${surnameToDisplay}!!!`;
  }, []);

  const addScore = (number) => {
    setScore(score + number);
  };
  const value = {
    score,
    setScore,
    addScore,
  };
  const greeting = useMemo(
    () => getGreeting(name, surname),
    [name, surname, getGreeting]
  );

  return (
    <Context.Provider value={value}>
      <div className="App">
        <h1 className="score-container">{greeting}</h1>
        <Score />
        <AddingScore />
        <User
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
        />
      </div>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
