import CartContext from "./cart-context";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToCartHandler = (item) => {
    setItems([...items, item]);
  };
  console.log(items);
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
