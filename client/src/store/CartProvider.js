import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItemCart = state.items[existingItemIndex];
    let updatedCartItems;

    if (existingItemCart) {
      const updatedItem = {
        ...existingItemCart,
        amount: existingItemCart.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItemCart = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItemCart.price;

    let updatedCartItems;
    if (existingItemCart.amount === 1) {
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItemCart,
        amount: existingItemCart.amount - 1,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
