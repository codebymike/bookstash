import React from "react";
import "./BooksNavigation.css";
import Controls from "./Controls/Controls.js"

const BooksNavigation = ( props ) => (
  <aside>
    <Controls {...props} />
  </aside>
);

export default BooksNavigation;
