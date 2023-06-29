import React, { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  // console.log(props.item);
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const quantity = document.getElementById("amount_" + props.item.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
    // console.log(cartCtx);
  };
  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.item.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
