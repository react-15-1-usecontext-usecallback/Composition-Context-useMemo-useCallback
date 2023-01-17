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

const User = (props) => {
  const { name, surname, setName, setSurname } = props;
  return (
    <div className="score-container">
      <h1 className="user-input">Input your name and surname!</h1>
      <div className="user-input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
    </div>
  );
};

function getGreeting(name, surname) {
  console.log(name);
  if (name.length < 3 || surname.length < 3) {
    return "Hello new user!!!";
  }
  const nameToDisplay =
    name.substring(0, 1).toUpperCase() + name.substring(1, name.length);
  const surnameToDisplay =
    surname.substring(0, 1).toUpperCase() + surname.substring(1, name.length);
  return `Hello ${nameToDisplay} ${surnameToDisplay}!!!`;
}

const App = () => {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const addScore = (number) => {
    setScore(score + number);
  };
  const value = {
    score,
    setScore,
    addScore,
  };
  const greeting = getGreeting(name, surname);
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
