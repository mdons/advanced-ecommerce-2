import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function render() {
  ReactDOM.render(
    <App
      state={state}
      changeCategory={changeCategory}
      currentCategory={currentCategory}
    />,
    document.getElementById("root")
  );
}

function changeCategory(category) {
  currentCategory = category;
  render();
}

render();
