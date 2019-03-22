import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "../components/CardList";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
};

const mapDispatchToProps = (dispatch) => {
  return { // map of actions
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
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

  render() {
    const { users } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField && searchField.toLowerCase());
    });

    if (!users.length) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="tc">
        <h1>Interactive User List</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList data={filteredUsers} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
