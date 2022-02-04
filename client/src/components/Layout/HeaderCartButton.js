import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + Number(item.amount);
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
