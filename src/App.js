import "./App.css";
import React, { useState } from "react";
import img from "./marathon.png";

const Form = (props) => {
  const { children, closeHandler } = props;
  function close(e) {
    if (e.target.dataset.closer) {
      closeHandler();
    }
  }
  return (
    <div className="modal" data-closer onClick={close}>
      <div className="inner">
        <div className="close" data-closer onClick={close}>
          X
        </div>
        {children ? children : null}
      </div>
    </div>
  );
};

const Text = (props) => {
  return <div>It is a simple text form</div>;
};

const Photo = (props) => {
  return <img src={img} />;
};

const App = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button className="show-button" onClick={() => setVisible(true)}>
        Show Form
      </button>
      {visible && (
        <Form closeHandler={() => setVisible(false)}>
          <Photo />
        </Form>
      )}
    </div>
  );
};

export default App;
