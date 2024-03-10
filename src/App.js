import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Grocery from "./components/Grocery";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrutantMenu from "./components/RestaurtantMenu";
import ProfileFunction from "./components/Profile";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import appStore from "./utils/appStore";

const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Parkhi Garg",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// children routes of app layout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileFunction />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestrutantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

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

// Redux used at data layer
