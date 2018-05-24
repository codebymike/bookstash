import React from "react";
import "./Side.css";
import Controls from "./Controls/Controls.js"

const Side = ( props ) => (
  <aside>
    <Controls setSortOrder={ props.setSortOrder }/>
  </aside>
);

export default Side;
