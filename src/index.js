import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import userReducer from "./store/reducers/userReducer";
import ingredientsReducer from "./store/reducers/ingredientsReducer";
import { Provider } from "react-redux";
import counterReducer from "./store/reducers/counterReducer";

const rootReducer = combineReducers({
  user: userReducer,
  ingredients: ingredientsReducer,
  counter: counterReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
