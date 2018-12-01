import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Table from "./table";
import Search from "./search";

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
    const { currentLease } = this.state;
    return (
      <div className="App">
        <Header />
        <Search />
        <Table lease={currentLease} />
      </div>
    );
  }
}

export default App;
