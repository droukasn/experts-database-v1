import React from "react";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <img src="/selecta-logo.png" alt="Selecta logo" className={styles.logo} />
    <span className={styles.title}>Selecta Talent Pool</span>
  </header>
);

export default Header;
