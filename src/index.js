import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";
import { searchUsers } from "./reducers";
import "tachyons";

// import { setSearchfield } from './actions';

const store = createStore(searchUsers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
