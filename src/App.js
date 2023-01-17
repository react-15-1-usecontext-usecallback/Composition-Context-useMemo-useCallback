import "./App.css";
import React from "react";
import img from "./marathon.png";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  close(e) {
    const { closeHandler } = this.props;
    if (e.target.dataset.closer) {
      closeHandler();
    }
  }

  render() {
    return (
      <div className="modal" data-closer onClick={this.close.bind(this)}>
        <div className="inner">
          <div className="close" data-closer onClick={this.close.bind(this)}>
            X
          </div>
        </div>
      </div>
    );
  }
}

class TextForm extends Form {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal" data-closer onClick={this.close.bind(this)}>
        <div className="inner">
          <div className="close" data-closer onClick={this.close.bind(this)}>
            X
          </div>
          <div>It is a simple text form</div>
        </div>
      </div>
    );
  }
}

class PhotoForm extends Form {
  render() {
    return (
      <div className="modal" data-closer onClick={this.close.bind(this)}>
        <div className="inner">
          <div className="close" data-closer onClick={this.close.bind(this)}>
            X
          </div>
          <div>
            <img src={img} />
          </div>
        </div>
      </div>
    );
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
        {visible && <PhotoForm closeHandler={this.hideModal} />}
      </div>
    );
  }
}

export default App;
