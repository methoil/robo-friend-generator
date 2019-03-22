import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "../components/CardList";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { setSearchField, requestUsers } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error,
  }
};

const mapDispatchToProps = (dispatch) => {
  return { // map of actions
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestUsers: () => dispatch(requestUsers()),
  }
};

class App extends Component {  
  componentDidMount() {
   this.props.onRequestUsers();
  }

  render() {
    const { searchField, onSearchChange, users, isPending } = this.props;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField && searchField.toLowerCase());
    });
    return isPending ?  <h1>Loading</h1> :
      <div className="tc">
        <h1>Interactive User List</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList data={filteredUsers} />
          </ErrorBoundry>
        </Scroll>
      </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
