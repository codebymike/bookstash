import React from "react";
import "./Main.css";
import Books from "./Books/Books";

const Main = (props) => (
  <main>
    <Books url={ props.url }/>
  </main>
);

export default Main;
