import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";

function App() {
  return (
    <div>
      Hello World
    </div>
  );
}

render(
    <App />,
  document.getElementById("app")
);
