import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Table from "./table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
