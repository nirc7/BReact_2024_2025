import { Component } from "react";

export default class CCChild extends Component {
  constructor(props) {
    super(props);

  }

  btnSendD2P = () => {
    this.props.sendData(7);
  }

  render() {
    return (
      <div>
        Child
        <button onClick={this.btnSendD2P}>send data</button>
      </div>
    );
  }
}