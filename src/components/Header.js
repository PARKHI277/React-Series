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

export default Header;
