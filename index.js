import React from "react";
import ReactDOM from "react-dom";

const name = "Jaylon O'Neal";
const CurrentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright {CurrentYear}!</p>
  </div>,
  document.getElementById("root")
);
