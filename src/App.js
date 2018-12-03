import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Table from "./table";
// import Search from "./search";

let API = "https://hiring-task-api.herokuapp.com/v1/leases/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLease: [],
      id: ":id"
    };
  }

  idSearch(e) {
    e.preventDefault();
    const idInput = this.idInput.value;
    this.setState(
      {
        id: idInput
      },
      () => this.fetchData()
    );
    this.addForm.reset();
  }

  // componentDidMount() {
  //   // this.fetchData();
  // }

  fetchData() {
    fetch(API + this.state.id)
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
        <div className="Search-container">
          <form
            ref={input => (this.addForm = input)}
            className="form-inline"
            onSubmit={e => {
              this.idSearch(e);
            }}
          >
            <label>ID:</label>
            <input
              ref={input => (this.idInput = input)}
              type="text"
              placeholder="input ID"
              className="input"
            />
            <button className="submit">submit</button>
          </form>
        </div>
        {/* <Search /> */}
        <Table lease={currentLease} />
      </div>
    );
  }
}

export default App;
