import React, { useContext, memo } from "react";
import Context from "./Context"


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
  console.log("AddingScore is called");
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

export default memo(AddingScore);
