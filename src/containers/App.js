import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll.js/index.js.js';
import SearchBox from "../components/SearchBox";
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
    const { users, searchfield } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    
    if (!users.length) {
      return <h1>Loading</h1>
    };
    return (
      <div className="tc">
        <h1>Interactive User List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList data={filteredUsers} />
        </Scroll>        
      </div>
    );
  }
}

export default App;
