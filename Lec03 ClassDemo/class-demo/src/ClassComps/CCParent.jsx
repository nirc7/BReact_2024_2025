import { Component } from "react";
import CCChild from "./CCChild";

export default class CCParent extends Component {
  constructor(props) {
    super(props);

  }

  getDataFromChild = (data) => {
    console.log('getDataFromChild',  data);
  }

  render() {
    return (
      <div>
        Parent
        <CCChild sendData={this.getDataFromChild} />
      </div>
    );
  }
}