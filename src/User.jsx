import { memo } from "react";
const User = (props) => {
  console.log("User is called");
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

export default memo(User);
