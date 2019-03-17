import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList";
import { data } from "./data";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: data,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredUsers = this.state.users.filter(user => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>Interactive User List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList data={filteredUsers} />
      </div>
    );
  }
}

export default App;
