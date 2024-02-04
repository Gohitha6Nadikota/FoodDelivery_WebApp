import React from "react";
import ReactDOM  from "react-dom/client";
const heading =React.createElement("h1",{},"Hello React");
//const heading=<h1 id="heading">Hello JSX</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);