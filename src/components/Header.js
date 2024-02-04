import { useState } from "react";

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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
