import { Fragment } from "react";
import mealsImages from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      {/* As class name includes - so we can not use dot notation for main-image */}
      <div className={classes["main-image"]}>
        <img src={mealsImages} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
