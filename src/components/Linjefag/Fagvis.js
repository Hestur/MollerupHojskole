import React, { Component } from "react";
import FagList from "./FagList";
import FagContextProvider from "./FagState";

export default class Fagvis extends Component {
  render() {
    return (
      <div>
        <FagContextProvider>
          <FagList />
        </FagContextProvider>
      </div>
    );
  }
}
