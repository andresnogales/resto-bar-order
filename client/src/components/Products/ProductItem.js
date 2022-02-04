import { useContext } from "react";
import CartContext from "../../store/CartContext";
import ProductForm from "./ProductForm";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <ProductForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default ProductItem;
