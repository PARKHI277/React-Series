import { useState } from "react";
import { Link } from "react-router-dom"; // it wil not refresh page - single page application

const Title = () => {
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
    />
  </a>;
};

export const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setLoggedIn(false)}> Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}> Login</button>
      )}
    </div>
  );
};

export default Header;
