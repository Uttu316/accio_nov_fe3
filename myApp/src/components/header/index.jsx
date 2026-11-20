import logo from "../../assets/react.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="app_header">
      <div className="app_logo">
        <img src={logo} />
        <h2>My App</h2>
      </div>
      <nav className="app_navbar">
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};
export default Header;
