 /*
 1. Hot module , building , mininfy , clear your code
 2. super fast build algorithim
 3. image optimiazation
 4. caching while development builds
 5. http on dev
 6. port Number
 7. we should put parvel cache in git-ignore
 8. zero config
 9. Transistive Dependencies
*/

import React from "react";
import ReactDOM from "react-dom/client";

/* -> jsx - this is not html inside javascript. It is like html syntax
   -> Bable convert jsx to react code
*/
 const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

 const elem = <span>React Element</span>
const title = (
  <h1 className="head" tableIndex="5">
    {elem}
    Namaste Reacts using JSX
  </h1>
);

const num = 100;
// React functional Component
const HeadingComponent = () => (
  <div id="container">
    <h2>{title}</h2>
    <h1 className="heading" tableIndex="5">
      Namaste Reacts comp
    </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

























/*
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
 const heading1 = React.createElement(
   "h1",
  { id: "title" }, // Correct syntax for attributes
    "Heading 1"
 );const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");



 const container = React.createElement(
   "div",
   {
     id: "container",
   },
  [heading1, heading2]
 );
 const root = ReactDOM.createRoot(document.getElementById("root")); root.render(container);

*/
