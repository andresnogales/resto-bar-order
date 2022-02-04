import { Fragment } from "react";

import classes from "./Header.module.css";
import logo from "../../assets/logo-bar.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes["header__logo"]} src={logo} alt="Logo Bar" />
        <h1 className={classes["header__text"]}>React Resto Bar</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
