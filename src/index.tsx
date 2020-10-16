import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/Store";
import { initialState } from "./redux/reducers/initialState";
import Container from "@material-ui/core/Container";
import "./index.scss";

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router>
      <Container maxWidth="md">
        <App />
      </Container>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
