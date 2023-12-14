/*
  Header 
    - logo
    - nav items
  body
    - search
    - contaniner
    - restro card
  footer
    - copyright
    - links
    - address
    - contact
*/

import React from "react";
import ReactDOM from "react-dom/client";

//functional Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// prop is an object

const RestroCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.treebo.com/blog/wp-content/uploads/2018/08/Raj-Kachori.jpg"
      />

      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisnes.join(", ")}</h4>
      <h4>{resData.data.avgRating}</h4>
      <h4>{resData.data.costForTwo}</h4>
      <h4>{resData.data.deliveryTime}</h4>
    </div>
  );
};

const reslistObj = [
  {
    type: "restaurtant",
    data: {
      id: "46568956788",

      type: "F",
      name: "KFC",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "465689b56788",

      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      type: "F",
      id: "46898",

      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "4612898",

      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "45688",

      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "456898",

      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "456898",

      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "4656898",
      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "4657898",
      type: "F",

      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "46576898",
      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
  {
    type: "restaurtant",
    data: {
      id: "465768798",
      type: "F",
      name: "KFCY",
      costForTwo: 40000,
      cuisnes: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
      avgRating: "3.8",
      totalRatings: "500",
      deliveryTime: "38 minutes",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {reslistObj.map((restaurtant) => (
          <RestroCard key={restaurtant.data.id} resData={restaurtant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

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

/* -> jsx - this is not html inside javascript. It is like html syntax
   -> Bable convert jsx to react code
*/

/*
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

const elem = <span>React Element</span>;
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

*/

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
