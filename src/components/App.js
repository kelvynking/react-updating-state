import React, { Component } from "react";
import ClickityClick from "./ClickityClick";
import ButtonCounter from "./ButtonCounter";
import LightSwitch from "./LightSwitch";

class App extends Component {
  render() {
    return (
      <div>
        <ClickityClick />
        <ButtonCounter />
        <LightSwitch />
      </div>
    );
  }
}

export default App;
