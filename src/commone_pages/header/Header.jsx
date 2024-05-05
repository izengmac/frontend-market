import React from "react";
import styles from "./style.module.css";
import logo from "../../img/white_logo.svg"; // импортируем изображение
import { Link } from "react-router-dom";

export const Header = () => {
  const test = "";
  return (
    <header className={styles["header"]}>
      <div className={styles["header-left-side"]}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles["header-logo"]} />
        </Link>
      </div>
      <div className={styles["header-links"]}>
        <Link to="/about">О НАС</Link>
        <Link to="/news">НОВОСТИ</Link>
        <Link to="/partners">ПАРТНЕРЫ</Link>
        <Link to="/contacts">КОНТАКТЫ</Link>
        <Link to="/sell/park">ТОРГОВЫЙ ПАРК</Link>
      </div>
      <div className={styles["header-right"]}>
        <Link to="/Home">ВХОД В ЛК</Link>
      </div>
    </header>
  );
};
