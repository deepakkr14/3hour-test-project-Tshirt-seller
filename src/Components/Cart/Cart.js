import Modal from "../Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cartContext";
import { useContext } from "react";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  // const cartcntx = {name:'deepak',
  // items:[]}

  let totalPrice = 0;
  for (const item of cartcntx.CartItems) {
    totalPrice += item.price * item.quantity;
  }
  const plusHandler = (item) => {
  //   cartcntx.addItem(item, 1);
  };

  const minusHandler = (item) => {
  //   cartcntx.removeItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.CartItems.map((item) => (
        // <li>{item.name} {item.price} quantity:{item.eachQty}</li>
        <li key={`${Math.random()}`}>
          <div>
            <h3>{item.name}</h3>
            <div className={classes.values}>
              <div className={classes.amount}>
                <h4>${item.price}</h4>
                <h3>X{item.size}</h3>
              </div>
              <div className={classes.button}>
                <button onClick={() => plusHandler(item)}>+</button>
                <button onClick={() => minusHandler(item)}>-</button>
              </div>
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );

  // console.log(cartItems)
  return (
    <Modal onClosebtn={props.onClosebtn}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClosebtn}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
