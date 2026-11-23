import logo from "../../assets/react.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.app_header}>
      <div className={`${styles.app_logo} ${styles.text}`}>
        <img src={logo} />
        <h2>My App</h2>
      </div>
      <nav className={styles.app_navbar}>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};
export default Header;
