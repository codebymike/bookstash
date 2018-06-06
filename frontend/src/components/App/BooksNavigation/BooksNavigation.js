import React from "react";
import "./BooksNavigation.css";
import Controls from "./Controls/Controls.js"

const BooksNavigation = ( props ) => (
  <aside>
    <Controls setSortOrder={ props.setSortOrder }/>
  </aside>
);

export default BooksNavigation;
