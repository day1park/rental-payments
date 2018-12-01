import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Table from "./table";

let API = "https://hiring-task-api.herokuapp.com/v1/leases/:id";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLease: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          currentLease: json
        });
      })
      .catch(error => console.log("parsing failed"));
  }

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
