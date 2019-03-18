import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ users: data });
      });
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
    
    if(this.state.users.length === 0) {
      return <h1>Loading</h1>
    };
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
