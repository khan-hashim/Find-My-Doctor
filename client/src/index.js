import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider as ReactProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import rootreducer from "./redux/reducers/rootReducer";

const store = createStore(rootreducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReactProvider>
);
