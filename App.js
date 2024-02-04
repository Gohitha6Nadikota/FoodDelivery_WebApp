import React from "react";
import ReactDOM  from "react-dom/client";
//const heading =React.createElement("h1",{},"Hello React");
//const heading=<h1 id="heading">Hello JSX</h1>;
const Heading =()=><h1>React Heading Component</h1>;

const Div=() => (
    <div>
    {Heading()}
    <Heading/>
    <Heading></Heading>
    {100+300}
    <p>React functional Component example</p>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Div/>);