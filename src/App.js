import "./App.css";
import React from "react";
import img from "./marathon.png";

class Form extends React.Component {
  close(e) {
    const { closeHandler } = this.props;
    if (e.target.dataset.closer) {
      closeHandler();
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="modal" data-closer onClick={this.close.bind(this)}>
        <div className="inner">
          <div className="close" data-closer onClick={this.close.bind(this)}>
            X
          </div>
          {children ? children : null}
        </div>
      </div>
    );
  }
}

class Text extends React.Component {
  render() {
    return <div>It is a simple text form</div>;
  }
}

class Photo extends React.Component {
  render() {
    return <img src={img} />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button className="show-button" onClick={this.showModal}>
          Show Form
        </button>
        {visible && (
          <Form closeHandler={this.hideModal}>
            <Photo />
          </Form>
        )}
      </div>
    );
  }
}

export default App;
